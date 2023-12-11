import { Op } from "sequelize";
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

  public async getEventByPeriod(date: string, isAfter: boolean) {
    try {
      let events;
      if(isAfter) {
        events = await this.model.findAll({ where: { date: { [Op.gte]: date } }});
      } else {
        events = await this.model.findAll({ where: { date: { [Op.lte]: date } }});
      }
      console.log(events);
      return { status: 222, data: { events }}
    } catch(error) {
        return { status: 500, data: { error }}
    }
  }
}

export default EventService;
