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
    user_id: string,
    event_id: string,
    selection: string,
    stake: string,
    _status: string
) {
    try {
        const insert = await this.model.create({
            userId: Number(user_id),
            eventId: Number(event_id),
            selection,
            stake: Number(stake),
            status: "ativo",
        });
        return {
            status: 201,
            data: { message: 'Criado com sucesso', data: insert.dataValues },
        };
    } catch (error) {
        console.error('Erro ao criar aposta:', error);
        return { status: 500, data: { message: 'Erro interno do servidor' } };
    }
}

  public async updateBet(
      id: string,
      user_id:string,
      event_id: string,
      selection: string,
      stake: string,
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
      status
    } }}
  }

  public async deleteBet(id: string) {
    await this.model.destroy({ where: { id: Number( id) }})
    return { status: 204 }
  }

  public async getBetByUser(userId: string) {
    const bets = await this.model.findAll({where: { userId }})
    return { status: 200, data: { bets }}
  }

  public async finish(id: string) {
    await this.model.update({ status: 'encerrado' }, { where: { id } } )
    return { status: 200, data: { message: 'Aposta encerrada' } };
  }
}
