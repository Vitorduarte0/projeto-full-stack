import { Router } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserController } from "../controller/UserController";
import { UserDataBase } from "../data/UserDataBase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManeger";
import { IdGenerator } from "../services/IdGenerator";

export const userRouter = Router();

const idGenerator: IdGenerator = new IdGenerator();
const authenticator: Authenticator = new Authenticator();
const hashManeger: HashManager = new HashManager();
const userDataBase: UserDataBase = new UserDataBase();

const userBusiness: UserBusiness = new UserBusiness(
  idGenerator,
  authenticator,
  hashManeger,
  userDataBase
);
const userController: UserController = new UserController(userBusiness);

userRouter.post("/signUp", (req, res) =>
  userController.signUpController(req, res)
);
userRouter.post("/login", (req, res) =>
  userController.loginController(req, res)
);
