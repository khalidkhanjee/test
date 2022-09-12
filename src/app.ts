import express, { ErrorRequestHandler } from "express";
import createHttpError from "http-errors";
import { errorHandler } from "./middlewares/errorHandler";
import currentStock from "./routes/currentStock.route";
import { APP_PORT } from "./config";

const app = express();

const morgan = require("morgan");

app.use(express.json());
app.use(
  morgan(
    ':remote-addr - [:date[web]] ":method :url HTTP/:http-version" :status Response Time::response-time ms'
  )
);

app.use("/stock", currentStock);

app.use(() => {
  throw createHttpError(404, "Route not found.");
});

app.use(errorHandler);

app.listen(APP_PORT, () => {
  console.log(`Listening On PORT ${APP_PORT}`);
});
