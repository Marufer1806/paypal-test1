import express from "express";
import morgan from "morgan";
import paymentRoutes from "./routes/payment.routes";
import path from "path";
import { env } from "process";

const app = express();

app.use(morgan("dev"));

app.use(paymentRoutes);




app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000);

console.log("server on port", 3000);

