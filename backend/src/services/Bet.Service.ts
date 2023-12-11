import BetModel from "../models/BetModel";

export default class BetService {
  constructor(private model = BetModel) {}

  public async getAllBets(): Promise<BetModel[]> {
    return await this.model.findAll();
  };

  public async getById(id: string): Promise<BetModel | null> {
    return await this.model.findByPk(id);
  }

  public async postBet(
      user_id:string,
      event_id: string,
      selection: string,
      stake: string,
      odds: string,
      status: string
    ) {
    const insert = await this.model.create({ 
      userId: Number(user_id), 
      eventId: Number(event_id),
      selection,
      stake: Number(stake),
      status 
    });
    return { status: 201, data: { message:  'Criado com sucesso', data: insert.dataValues }}
  }

  public async updateBet(
      id: string,
      user_id:string,
      event_id: string,
      selection: string,
      stake: string,
      odds: string,
      status: string
  ) {
    await this.model.update({ userId: Number(user_id), 
      eventId: Number(event_id),
      selection,
      stake: Number(stake),
      status }, { where: { id: Number(id) } })
    return { status: 200, data: { message:  'Atualizado com sucesso', data: {
      userId: Number(user_id), 
      eventId: Number(event_id),
      selection,
      stake,
      odds: Number(odds), 
      status
    } }}
  }

  public async deleteBet(id: string) {
    await this.model.destroy({ where: { id: Number( id) }})
    return { status: 204 }
  }
}
