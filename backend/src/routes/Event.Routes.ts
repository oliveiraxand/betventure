import express from 'express';
import EventController from '../controllers/Event.Controller';

const eventRouter = express.Router();
const eventController = new EventController();

eventRouter.get("/get-all", eventController.getAllEvents);

eventRouter.get("/past", eventController.past);

eventRouter.post("/create", eventController.createEvent);

eventRouter.get("/future", eventController.future);

eventRouter.get("/:id", eventController.getById);

eventRouter.put("/:id", eventController.updateEvent);

eventRouter.delete("/:id", eventController.deleteEvent);

export default eventRouter;
