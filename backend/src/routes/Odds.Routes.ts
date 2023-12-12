import express from 'express';
import OddsController from '../controllers/Odds.Controller';
import { verifyEvent } from '../middlewares/EventMiddleware';

const oddsRouter = express.Router();
const oddsController = new OddsController();

oddsRouter.get("/get-all", oddsController.getAllOdds);

oddsRouter.get("/:eventId", verifyEvent, oddsController.getById);

oddsRouter.post("/create", oddsController.createOdds);

oddsRouter.put("/:eventId", verifyEvent, oddsController.updateOdds);

oddsRouter.delete("/:eventId", verifyEvent, oddsController.deleteOdds);

export default oddsRouter;
