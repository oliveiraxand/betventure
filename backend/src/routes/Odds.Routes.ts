import express, { Request, Response } from 'express';
import OddsController from '../controllers/Odds.Controller';

const oddsRouter = express.Router();
const oddsController = new OddsController();

oddsRouter.get("/get-all", oddsController.getAllOdds);

oddsRouter.get("/:eventId", oddsController.getById);

oddsRouter.post("/create", oddsController.createOdds);

oddsRouter.put("/:eventId", oddsController.updateOdds);

oddsRouter.delete("/:eventId", oddsController.deleteOdds);

export default oddsRouter;
