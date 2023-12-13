import express, { Request, Response } from 'express';
import SportController from '../controllers/Sport.Controller';
import { verifySport } from '../middlewares/SportMiddleware';

const sportRouter = express.Router();
const sportController = new SportController();

sportRouter.get("/", sportController.getAllSports);

sportRouter.get("/:id", verifySport, sportController.getById);

sportRouter.post("/", sportController.createSport);

sportRouter.put("/:id", verifySport, sportController.updateSport);

sportRouter.delete("/:id", verifySport, sportController.deleteSport);

export default sportRouter;
