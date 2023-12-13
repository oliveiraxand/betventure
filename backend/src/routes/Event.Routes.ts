import express from 'express';
import EventController from '../controllers/Event.Controller';
import { verifyEvent } from '../middlewares/EventMiddleware';

const eventRouter = express.Router();
const eventController = new EventController();

eventRouter.get("/", eventController.getAllEvents);

eventRouter.get("/past", eventController.past);

eventRouter.post("/", eventController.createEvent);

eventRouter.get("/future", eventController.future);

eventRouter.get("/:id", verifyEvent, eventController.getById);

eventRouter.put("/:id", verifyEvent, eventController.updateEvent);

eventRouter.delete("/:id", verifyEvent, eventController.deleteEvent);

export default eventRouter;
