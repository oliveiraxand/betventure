import EventModel from "../models/EventModel";

class EventService {
  constructor(private model = EventModel) {}

  public async getAllEvents(): Promise<EventModel[]> {
    return await this.model.findAll();
  };

  public async getById(id: string): Promise<EventModel | null> {
    return await this.model.findByPk(id);
  }

  public async postEvent(name:string, date:string, sportId:string) {
    const insert = await this.model.create({ name, date, sportId: Number(sportId) })
    return { status: 201, data: { message:  'Criado com sucesso', data: insert.dataValues }}
  }

  public async updateEvent(id: string, name:string, date:string, sportId:string) {
    await this.model.update({ name, date, sportId: Number(sportId) }, { where: { id: Number(id) } })
    return { status: 200, data: { message:  'Atualizado com sucesso', data: { id, name, date, sportId } }}
  }

  public async deleteEvent(id: string) {
    await this.model.destroy({ where: { id: Number( id) }})
    return { status: 204 }
  }
}

export default EventService;
