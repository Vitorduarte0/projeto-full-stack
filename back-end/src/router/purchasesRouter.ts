import { Router } from "express";
import { PurchasesBusiness } from "../business/PurchasesBusiness";
import { PurchasesController } from "../controller/PurchasesController";
import { ProductDataBase } from "../data/ProductDataBase";
import { PurchasesDataBase } from "../data/PurchasesDataBase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export const purchasesRouter = Router();
/*
private idGenerator: IdGenerator,
    private authenticator: Authenticator,
    private purchasesData: IPurchasesDataBase,
    private productData: IProductDataBase

*/

const idGenerator: IdGenerator = new IdGenerator();
const authenticator: Authenticator = new Authenticator();
const purchasesDataBase: PurchasesDataBase = new PurchasesDataBase();
const productData: ProductDataBase = new ProductDataBase();

const purchasesBusiness: PurchasesBusiness = new PurchasesBusiness(
  idGenerator,
  authenticator,
  purchasesDataBase,
  productData
);
const purchasesController: PurchasesController = new PurchasesController(
  purchasesBusiness
);
purchasesRouter.post("/register/:product_id", (req, res) =>
  purchasesController.registerPurchases(req, res)
);
