import { Router } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { ProductController } from "../controller/ProductController";
import { ProductDataBase } from "../data/ProductDataBase";
import { IdGenerator } from "../services/IdGenerator";
export const productRouter = Router();

const productDataBase: ProductDataBase = new ProductDataBase();

const idGeneretor: IdGenerator = new IdGenerator();

const productBusiness: ProductBusiness = new ProductBusiness(
  idGeneretor,
  productDataBase
);

const productController: ProductController = new ProductController(
  productBusiness
);

productRouter.post("/", (req, res) =>
  productController.createProductController(req, res)
);
