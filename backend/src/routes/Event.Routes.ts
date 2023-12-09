import express, { Request, Response } from 'express';
import EventController from '../controllers/Event.Controller';

const eventRouter = express.Router();
const eventController = new EventController();

eventRouter.get("/get-all", eventController.getAllEvents);

eventRouter.get("/:id", eventController.getById);

eventRouter.post("/create", eventController.createEvent);

eventRouter.put("/:id", eventController.updateEvent);

eventRouter.delete("/:id", eventController.deleteEvent);

export default eventRouter;
