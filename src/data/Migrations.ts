import { BaseDataBase } from "./BaseDataBase";

export class Migrations extends BaseDataBase {
  printError = (error: any) => {
    console.log(error.sqlMessage || error.message);
  };
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
     `
      )
      .then(() => console.log("Tabela criada com sucesso"))
      .catch((error: any) => console.log(error.sqlMessage || error.message));
  closeConnection = () => this.getConnection().destroy();
}

const migrations = new Migrations();
migrations.createTable().finally(migrations.closeConnection);
