import dotenv from "dotenv";
dotenv.config();

import express from "express";

import indexRouter from "./routes/index";
import productsRouter from "./routes/products";
import usersRouter from "./routes/users";

const app = express();

// JSON middleware -> om er voor te zorgen dat er JSON data in de body binnen komt
app.use(express.json());

// Application level middleware
app.use((req, res, next) => {
    console.log("IP adres: ", req.ip);
    next()
})

// Routers
app.use("/", indexRouter);
app.use("/products", productsRouter)
app.use("/users", usersRouter);


export default app;