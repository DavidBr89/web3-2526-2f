import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import {rateLimit} from "express-rate-limit";

import indexRouter from "./routes/index";
import productsRouter from "./routes/products";
import usersRouter from "./routes/users";

const app = express();

// JSON middleware -> om er voor te zorgen dat er JSON data in de body binnen komt
app.use(express.json());
// Cookie middleware
app.use(cookieParser());
// CORS middleware
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

const limiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    limit: 100
})

app.use(limiter);

app.use(helmet());

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