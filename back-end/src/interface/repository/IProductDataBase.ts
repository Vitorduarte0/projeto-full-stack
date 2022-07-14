import { Product } from "../Product";

export interface IProductDataBase {
  getAllProductsDataBase(name: string): Promise<Product[]>;
  createProduct(product: Product): Promise<void>;
}
