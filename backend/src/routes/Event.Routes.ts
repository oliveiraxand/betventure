import express, { Request, Response } from 'express';
import EventController from '../controllers/Event.Controller';

const eventRouter = express.Router();
const eventController = new EventController();

eventRouter.get("/get-all", eventController.getAllEvents);

eventRouter.get("/:id", eventController.getById);

export default eventRouter;
