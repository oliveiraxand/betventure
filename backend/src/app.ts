import express from "express";
import authRouter from "./routes/Auth.Routes";
import eventRouter from "./routes/Event.Routes";
import betRouter from "./routes/Bet.Routes";
import sportRouter from "./routes/Sport.Routes";
import oddsRouter from "./routes/Odds.Routes";
import userRouter from "./routes/User.Routes";
import transactionHistoryRouter from "./routes/TransactionHistory.Routes";
import teamRouter from "./routes/Team.Routes";

const app = express();
app.use(express.json());

// Rotas
app.use("/auth", authRouter);
app.use("/events", eventRouter);
app.use("/bets", betRouter);
app.use("/sports", sportRouter)
app.use("/odds", oddsRouter);
app.use("/users", userRouter);
app.use("/transaction", transactionHistoryRouter);
app.use("/teams", teamRouter);

export default app;
