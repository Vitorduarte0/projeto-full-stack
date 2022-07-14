import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { CustomError } from "../Error/CustomError";
import { productDTO } from "../types/product";

export class ProductController {
  constructor(private productBusiness: ProductBusiness) {}
  createProductController = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const { name, price, image_url } = req.body;
      const productDTO: productDTO = {
        name,
        price,
        image_url
      };
      await this.productBusiness.createProductBusiness(productDTO);
      res.status(201).send({ message: "Produto cadastrado com susesso!" });
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
