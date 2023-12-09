import { Request, Response } from "express";
import EventService from "../services/Event.service";

class EventController {
  private _service: EventService;

  constructor() {
    this._service = new EventService();
    // Certifique-se de que o contexto (this) está vinculado corretamente
    this.getAllEvents = this.getAllEvents.bind(this);
    this.getById = this.getById.bind(this);
  }

  public async getAllEvents(_req: Request, res: Response) {
    const serviceResponse = await this._service.getAllEvents();
    return res.status(200).json({ events: serviceResponse })
  }

  public async getById(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await this._service.getById(id);
    return res.status(200).json({ event: serviceResponse })
  }
}

export default EventController;
