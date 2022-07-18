import { Product } from "../interface/Product";
import { IProductDataBase } from "../interface/repository/IProductDataBase";
import { BaseDataBase } from "./BaseDataBase";

export class ProductDataBase extends BaseDataBase implements IProductDataBase {
  private TABLE_NAME = "ecommerceProduct";
  getAllProductsDataBase = async (name: string): Promise<Product[]> => {
    const products = await this.getConnection()
      .from(this.TABLE_NAME)
      .where("name", "like", `%${name}%`);
    return products;
  };
  createProduct = async (product: Product): Promise<void> => {
    await this.getConnection().insert(product).into(this.TABLE_NAME);
  };

  productById = async (id: string): Promise<Product> => {
    const product = await this.getConnection()
      .from(this.TABLE_NAME)
      .where({ id });
    return product[0];
  };
}
