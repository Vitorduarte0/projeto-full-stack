import { CustomError } from "../Error/CustomError";
import { Purchases } from "../interface/Purchases";
import { IProductDataBase } from "../interface/repository/IProductDataBase";
import { IPurchasesDataBase } from "../interface/repository/IPurchasesDataBase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { purchasesDTO } from "../types/purchases";

export class PurchasesBusiness {
  constructor(
    private idGenerator: IdGenerator,
    private authenticator: Authenticator,
    private purchasesData: IPurchasesDataBase,
    private productData: IProductDataBase
  ) {}
  registerPurchasesBusiness = async (
    purchasesDTO: purchasesDTO,
    token: string
  ) => {
    const { quantify, product_id } = purchasesDTO;

    const id = this.idGenerator.generationId();
    const product = await this.productData.productById(product_id);

    if (!product) {
      throw new CustomError("Esse produto não existe", 404);
    }
    if (quantify < 1) {
      throw new CustomError("É preciso informar a quantidade do produto!", 404);
    }
    const user = await this.authenticator.getTokenData(token);
    console.log("id do usuario", user.id);

    const totalPrice = quantify * product.price;
    const date = new Date();
    const date_purchases = date.toLocaleString();
    const purchases: Purchases = {
      id,
      user_id: user.id,
      product_id,
      quantify,
      date_purchases,
      total_price: totalPrice
    };

    await this.purchasesData.createRegisterPurchase(purchases);
  };
}
