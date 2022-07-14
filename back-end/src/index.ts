import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { userRouter } from "./router/userRouter";
import { productRouter } from "./router/productRouter";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/product", productRouter);
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
