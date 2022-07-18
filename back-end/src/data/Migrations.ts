import { BaseDataBase } from "./BaseDataBase";

export class Migrations extends BaseDataBase {
  createTable = () =>
    this.getConnection()
      .raw(
        `
     CREATE TABLE IF NOT EXISTS ecommerceUsers(
        id VARCHAR(255) PRIMARY KEY NOT NULL,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
    );
     CREATE TABLE IF NOT EXISTS ecommerceProduct(
        id VARCHAR(255) PRIMARY KEY NOT NULL,
        name VARCHAR(255) NOT NULL,
        price FLOAT NOT NULL,
        image_url TEXT(1023) NOT NULL
    );
    CREATE TABLE IF NOT EXISTS ecommercePurchases(
      id VARCHAR(255) PRIMARY KEY,
      user_id VARCHAR(255) NOT NULL,
      product_id VARCHAR(255) NOT NULL,
      quantify FLOAT NOT NULL,
        date_purchases VARCHAR(50),
      total_price FLOAT NOT NULL
    );
     `
      )
      .then(() => console.log("Tabela criada com sucesso"))
      .catch((error: any) => console.log(error.sqlMessage || error.message));
  closeConnection = () => this.getConnection().destroy();
}

const migrations = new Migrations();
migrations.createTable().finally(migrations.closeConnection);
