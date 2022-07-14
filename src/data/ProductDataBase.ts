import { Product } from "../interface/Product";
import { IProductDataBase } from "../interface/repository/IProductDataBase";
import { BaseDataBase } from "./BaseDataBase";

export class ProductDataBase extends BaseDataBase implements IProductDataBase {
  private TABLE_NAME = "ecommerceProduct";
  createProduct = async (product: Product): Promise<void> => {
    await this.getConnection().insert(product).into(this.TABLE_NAME);
  };
}
