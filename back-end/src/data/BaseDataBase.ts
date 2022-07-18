import knex, { Knex } from "knex";
import dotenv from "dotenv";
dotenv.config();
export class BaseDataBase {
  private static connection: Knex | null = null;
  protected getConnection(): Knex {
    if (!BaseDataBase.connection) {
      BaseDataBase.connection = knex({
        client: "mysql",
        connection: {
          host: process.env.DB_HOST,
          port: Number(process.env.DB_PORT || "3306"),
          user: process.env.DB_USER,
          password: process.env.DB_PASS,
          database: process.env.DB_NAME,
          multipleStatements: true
        }
      });
    }
    return BaseDataBase.connection;
  }
  public async destroyConnection(): Promise<void> {
    if (BaseDataBase.connection) {
      await BaseDataBase.connection.destroy();
      BaseDataBase.connection = null;
    }
  }
}
