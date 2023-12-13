import { Request, Response } from "express";
import EventService from "../services/Event.Service";

class EventController {
  private _service: EventService;

  constructor() {
    this._service = new EventService();
    // Certifique-se de que o contexto (this) está vinculado corretamente
    this.getAllEvents = this.getAllEvents.bind(this);
    this.getById = this.getById.bind(this);
    this.createEvent = this.createEvent.bind(this);
    this.updateEvent = this.updateEvent.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
    this.future = this.future.bind(this);
    this.past = this.past.bind(this);
  }

  public async getAllEvents(_req: Request, res: Response) {
    const serviceResponse = await this._service.getAllEvents();
    return res.status(200).json({ events: serviceResponse });
  }

  public async getById(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await this._service.getById(id);
    return res.status(200).json({ event: serviceResponse });
  }

  public async createEvent(req: Request, res: Response) {
    const { name, sportId, teamHomeId, teamAwayId } = req.body;
    const serviceResponse = await this._service.postEvent(name, sportId, teamHomeId, teamAwayId);
    return res.status(serviceResponse.status).json(serviceResponse.data);
  }

  public async updateEvent(req: Request, res: Response) {
    const { name, date, sportId, teamHomeId, teamAwayId } = req.body;
    const { id } = req.params;
    const serviceResponse = await this._service.updateEvent(id, name, date, sportId, teamHomeId, teamAwayId);
    return res.status(serviceResponse.status).json(serviceResponse.data);
  }

  public async deleteEvent(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await this._service.deleteEvent(id);
    return res.status(serviceResponse.status)
  }

  public async past(req: Request, res: Response) {
    const { date } = req.body;
    const serviceResponse = await this._service.getEventByPeriod(date, false);
    return res.status(serviceResponse.status).json(serviceResponse.data);
  }

  public async future(req: Request, res: Response) {
    const { date } = req.body;
    const serviceResponse = await this._service.getEventByPeriod(date, true);
    return res.status(serviceResponse.status).json(serviceResponse.data);
  }
}

export default EventController;
