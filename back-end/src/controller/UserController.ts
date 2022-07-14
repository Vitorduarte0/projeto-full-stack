import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { CustomError } from "../Error/CustomError";
import { loginDTO, userDTO } from "../types/user";

export class UserController {
  constructor(private userBusiness: UserBusiness) {}
  signUpController = async (req: Request, res: Response): Promise<void> => {
    try {
      const { name, email, password } = req.body;
      const userDTO: userDTO = {
        name,
        email,
        password
      };

      const token = await this.userBusiness.signUpBusiness(userDTO);
      res.status(201).send({
        message: `Olá, ${name}! Seu dados foram cadastrado no VT ecomerce`,
        token
      });
    } catch (error) {
      if (error instanceof CustomError) {
        res.status(error.statusCode).send({ message: error.message });
      } else if (error) {
        res.status(400).send({ error });
      } else {
        res.status(500).send({ message: "Erro ao se conectar com o servidor" });
      }
    }
  };

  loginController = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;
      const loginDTO: loginDTO = {
        email,
        password
      };
      const token = await this.userBusiness.loginBusiness(loginDTO);
      res.send({ message: "Usário logado com sucesso", token });
    } catch (error) {
      if (error instanceof CustomError) {
        res.status(error.statusCode).send({ message: error.message });
      } else if (error) {
        res.status(400).send({ error });
      } else {
        res.status(500).send({ message: "Erro ao se conectar com o servidor" });
      }
    }
  };
}
