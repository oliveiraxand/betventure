import express from "express";
import authRouter from "./routes/Auth.Routes";
import eventRouter from "./routes/Event.Routes";

const app = express();
app.use(express.json());

// Middlewares, configurações, etc.

// Rotas
app.use("/auth", authRouter);
app.use("/events", eventRouter);

export default app;
