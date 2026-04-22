import express from "express";

import indexRouter from "./routes/index";
import productsRouter from "./routes/products";

const app = express();

// JSON middleware -> om er voor te zorgen dat er JSON data in de body binnen komt
app.use(express.json());

// Routers
app.use("/", indexRouter);
app.use("/products", productsRouter)


export default app;