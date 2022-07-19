import { Purchases } from "../Purchases";

export interface IPurchasesDataBase {
  createRegisterPurchase(purchases: Purchases): Promise<void>;
  getOrderPurchase(id: string): Promise<Purchases>;
}
