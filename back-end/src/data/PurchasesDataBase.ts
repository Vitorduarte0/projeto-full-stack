import { Purchases } from "../interface/Purchases";
import { IPurchasesDataBase } from "../interface/repository/IPurchasesDataBase";
import { BaseDataBase } from "./BaseDataBase";

export class PurchasesDataBase extends BaseDataBase
  implements IPurchasesDataBase {
  private TABLE_NAME = "ecommercePurchases";
  createRegisterPurchase = async (purchases: Purchases): Promise<void> => {
    console.log(purchases);
    await this.getConnection().insert(purchases).into(this.TABLE_NAME);
  };
}
