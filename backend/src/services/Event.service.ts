import EventModel from "../models/EventModel";

class EventService {
  constructor(private model = EventModel) {}

  public async getAllEvents(): Promise<EventModel[]> {
    return await this.model.findAll();
  };

  public async getById(id: string): Promise<EventModel | null> {
    return await this.model.findByPk(id);
  }
}

export default EventService;
