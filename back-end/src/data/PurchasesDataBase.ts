import { Purchases } from "../interface/Purchases";
import { IPurchasesDataBase } from "../interface/repository/IPurchasesDataBase";
import { BaseDataBase } from "./BaseDataBase";

export class PurchasesDataBase extends BaseDataBase
  implements IPurchasesDataBase {
  private TABLE_NAME = "ecommercePurchases";
  createRegisterPurchase = async (purchases: Purchases): Promise<void> => {
    await this.getConnection().insert(purchases).into(this.TABLE_NAME);
  };

  getOrderPurchase = async (id: string): Promise<Purchases> => {
    const purchases = await this.getConnection()
      .from(this.TABLE_NAME)
      .join(
        "ecommerceUsers",
        "ecommercePurchases.user_id",
        "=",
        `ecommerceUsers.id`
      )
      .join(
        "ecommerceProduct",
        "ecommercePurchases.product_id",
        "=",
        "ecommerceProduct.id"
      )
      .select(
        "ecommerceUsers.name",
        "ecommerceProduct.name",
        "ecommerceProduct.price",
        "ecommerceProduct.image_url",
        "ecommercePurchases.total_price"
      )
      .where("ecommercePurchases.user_id", "=", `${id}`);
    return purchases[0];
  };
}
