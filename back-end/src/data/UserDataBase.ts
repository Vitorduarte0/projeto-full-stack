import { IUserDataBase } from "../interface/repository/IUserDataBase";
import { User } from "../interface/User";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase implements IUserDataBase {
  private TABLE_NAME = "ecommerceUsers";
  signUpData = async (user: User): Promise<void> => {
    await this.getConnection().insert(user).into(this.TABLE_NAME);
  };

  findUserByEmail = async (email: string): Promise<User> => {
    const user = await this.getConnection()
      .from(this.TABLE_NAME)
      .where({ email });
    return user[0];
  };
}
