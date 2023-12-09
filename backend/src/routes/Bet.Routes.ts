import express, { Request, Response } from 'express';
import BetController from '../controllers/Bet.Controller';

const betRouter = express.Router();
const betController = new BetController();

betRouter.get("/get-all", betController.getAllBets);

betRouter.get("/:id", betController.getById);

betRouter.post("/create", betController.createBet);

betRouter.put("/:id", betController.updateBet);

betRouter.delete("/:id", betController.deleteBet);

export default betRouter;
