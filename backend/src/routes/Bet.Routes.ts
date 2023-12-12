import express from 'express';
import BetController from '../controllers/Bet.Controller';
import { verifyBet } from '../middlewares/BetMiddleware';
import { verifyUserByUserId } from '../middlewares/UserMiddleware';

const betRouter = express.Router();
const betController = new BetController();

betRouter.get("/history/:userId", verifyUserByUserId, betController.getBetByUser);

betRouter.get("/get-all", betController.getAllBets);

betRouter.get("/:id", verifyBet, betController.getById);

betRouter.post("/create", betController.createBet);

betRouter.put("/:id", verifyBet, betController.updateBet);

betRouter.delete("/:id", verifyBet, betController.deleteBet);

betRouter.post("/:id/finish", verifyBet, betController.finish);

export default betRouter;
