import express, { Request, Response } from 'express';
import SportController from '../controllers/Sport.Controller';

const sportRouter = express.Router();
const sportController = new SportController();

sportRouter.get("/", sportController.getAllSports);

sportRouter.get("/:id", sportController.getById);

sportRouter.post("/create", sportController.createSport);

sportRouter.put("/:id", sportController.updateSport);

sportRouter.delete("/:id", sportController.deleteSport);

export default sportRouter;
