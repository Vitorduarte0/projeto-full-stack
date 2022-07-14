import { Product } from "../Product";

export interface IProductDataBase {
  getAllProductsDataBase(): Promise<Product[]>;
  createProduct(product: Product): Promise<void>;
}
