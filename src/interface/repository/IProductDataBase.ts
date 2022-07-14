import { Product } from "../Product";

export interface IProductDataBase {
  createProduct(product: Product): Promise<void>;
}
