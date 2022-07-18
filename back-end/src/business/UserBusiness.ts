import { CustomError } from "../Error/CustomError";
import { IUserDataBase } from "../interface/repository/IUserDataBase";
import { User } from "../interface/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManeger";
import { IdGenerator } from "../services/IdGenerator";
import { NodeMailer } from "../services/NodeMailer";
import { authenticationData } from "../types/authenticationData";
import { loginDTO, userDTO } from "../types/user";

export class UserBusiness {
  constructor(
    private idGenerator: IdGenerator,
    private authenticator: Authenticator,
    private hashManeger: HashManager,
    private userDataBase: IUserDataBase,
    private nodeMailer: NodeMailer
  ) {}
  signUpBusiness = async (user: userDTO): Promise<string> => {
    const { name, email, password } = user;
    if (!name || !email || !password) {
      throw new CustomError(
        "Verifique se os campos 'name', 'email' e 'password' foram preenchidos",
        422
      );
    }
    if (email.indexOf("@") === -1) {
      throw new CustomError(
        "Verifique se o formato do email está correto. Atenta-se ao '@'",
        400
      );
    }
    if (password.length < 8) {
      throw new CustomError("A senha deve ter no mínimo 8 caractéries", 400);
    }
    const verifyExitUser = await this.userDataBase.findUserByEmail(email);

    if (verifyExitUser) {
      throw new CustomError("Esse usuário já existe!", 400);
    }

    const id = this.idGenerator.generationId();
    const newPassword = this.hashManeger.createHash(password);
    const createUser: User = {
      id,
      name,
      email,
      password: newPassword
    };
    const payload: authenticationData = {
      id
    };
    const token = this.authenticator.generationToken(payload);
    await this.nodeMailer.sendEmailToNewUsers(email, password);

    await this.userDataBase.signUpData(createUser);

    return token;
  };
  loginBusiness = async (userLogin: loginDTO): Promise<string> => {
    const { email, password } = userLogin;
    if (!email || !password) {
      throw new CustomError(
        "Verifique se os campos 'email' e 'password' foram preenchidos!",
        422
      );
    }

    const verifyExitUser = await this.userDataBase.findUserByEmail(email);
    if (!verifyExitUser) {
      throw new CustomError("Email ou senha está incorreta!", 400);
    }

    const isPassword = this.hashManeger.compareHash(
      password,
      verifyExitUser.password
    );

    if (!isPassword) {
      throw new CustomError("Email ou senha está incorreta", 401);
    }

    const payload: authenticationData = {
      id: verifyExitUser.id
    };
    const token = this.authenticator.generationToken(payload);

    return token;
  };
}
