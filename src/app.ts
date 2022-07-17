import * as express from "express";
import * as dotenv from "dotenv";
import * as morgan from "morgan";
import * as cors from "cors";

import apiRouter from "./routes/apiRouter";
dotenv.config();
const app = express();

const port = process.env.PORT;

if (process.env.NODE_ENV === "producetion") {
  app.use(morgan("combined"));
} else {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRouter);
app.listen(port, () => {
  console.log("info", `http://localhost:${port}`);
});
