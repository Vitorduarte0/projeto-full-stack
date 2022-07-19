import { Request, Response } from "express";
import { PurchasesBusiness } from "../business/PurchasesBusiness";
import { CustomError } from "../Error/CustomError";
import { purchasesDTO } from "../types/purchases";

export class PurchasesController {
  constructor(private purchasesBusiness: PurchasesBusiness) {}
  registerPurchases = async (req: Request, res: Response): Promise<void> => {
    try {
      const quantify: number = req.body.quantify;
      const product_id = req.params.product_id;
      const token = req.headers.authorization;
      const purchasesDTO: purchasesDTO = {
        quantify,
        product_id
      };
      await this.purchasesBusiness.registerPurchasesBusiness(
        purchasesDTO,
        token
      );
      res.status(201).send({ message: "Registro de compra criado" });
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
  getOrderPurchases = async (req: Request, res: Response): Promise<void> => {
    try {
      const token = req.headers.authorization;
      const orderRegisterPurchases = await this.purchasesBusiness.getOrderPurchasesBusiness(
        token
      );
      res.send({ orderRegisterPurchases });
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
