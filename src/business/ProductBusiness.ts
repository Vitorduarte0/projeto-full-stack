import { ProductDataBase } from "../data/ProductDataBase";
import { CustomError } from "../Error/CustomError";
import { Product } from "../interface/Product";
import { IProductDataBase } from "../interface/repository/IProductDataBase";
import { IdGenerator } from "../services/IdGenerator";
import { productDTO } from "../types/product";

export class ProductBusiness {
  constructor(
    private idGeneretor: IdGenerator,
    private productDataBase: IProductDataBase
  ) {}
  createProductBusiness = async (productDTO: productDTO): Promise<void> => {
    const { name, price, image_url } = productDTO;
    if (!name || !price || !image_url) {
      throw new CustomError(
        "Verifique se todos os campos foram preenchidos",
        422
      );
    }
    const id = this.idGeneretor.generationId();
    //validar se esse produto já existe ou não
    const product: Product = {
      id,
      name,
      price,
      image_url
    };
    await this.productDataBase.createProduct(product);
  };
}
