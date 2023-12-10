import OddsModel from "../models/OddsModel";

export default class OddsService {
  constructor(private model = OddsModel) {}

  public async getAllOdds(): Promise<OddsModel[]> {
    return await this.model.findAll();
  };

  public async getById(id: string): Promise<OddsModel | null> {
    return await this.model.findByPk(id);
  }

  public async postOdds(eventId:string, home:string, away: string, draw: string) {
    const insert = await this.model.create({ eventId: Number(eventId), home: Number(home), away: Number(away), draw: Number(draw) });
    return { status: 201, data: { message:  'Criado com sucesso', data: insert.dataValues }}
  }

  public async updateOdds(eventId:string, home:string, away: string, draw: string) {
    await this.model.update({ home: Number(home), away: Number(away), draw: Number(draw) }, { where: { eventId: Number(eventId) } })
    return { status: 200, data: { message:  'Atualizado com sucesso', data: { eventId, home, away, draw } }}
  }

  public async deleteOdds(eventId: string) {
    await this.model.destroy({ where: { eventId: Number( eventId) }})
    return { status: 204 }
  }
}
