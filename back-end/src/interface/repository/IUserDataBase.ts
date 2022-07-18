import { User } from "../User";

export interface IUserDataBase {
  signUpData(user: User): Promise<void>;
  // findUserById(id: string): Promise<User>;
  findUserByEmail(email: string): Promise<User>;
}
