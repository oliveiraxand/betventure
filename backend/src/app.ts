import express from "express";
import authRouter from "./routes/Auth.Routes";

const app = express();
app.use(express.json());

// Middlewares, configurações, etc.

// Rotas
app.use("/auth", authRouter);

export default app;
