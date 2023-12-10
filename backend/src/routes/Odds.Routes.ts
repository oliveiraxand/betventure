import express, { Request, Response } from 'express';
import OddsController from '../controllers/Odds.Controller';

const oddsRouter = express.Router();
const oddsController = new OddsController();

oddsRouter.get("/get-all", oddsController.getAllOdds);

oddsRouter.get("/:id", oddsController.getById);

oddsRouter.post("/create", oddsController.createOdds);

oddsRouter.put("/:id", oddsController.updateOdds);

oddsRouter.delete("/:id", oddsController.deleteOdds);

export default oddsRouter;
