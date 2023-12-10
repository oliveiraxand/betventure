import SportModel from "../models/SportModel";

export default class SportService {
  constructor(private model = SportModel) {}

  public async getAllSports(): Promise<SportModel[]> {
    return await this.model.findAll();
  };

  public async getById(id: string): Promise<SportModel | null> {
    return await this.model.findByPk(id);
  }

  public async postSport(name:string) {
    const insert = await this.model.create({ name })
    return { status: 201, data: { message:  'Criado com sucesso', data: insert.dataValues }}
  }

  public async updateSport(id: string, name:string) {
    await this.model.update({ name }, { where: { id: Number(id) } })
    return { status: 200, data: { message:  'Atualizado com sucesso', data: { id, name } }}
  }

  public async deleteSport(id: string) {
    await this.model.destroy({ where: { id: Number( id) }})
    return { status: 204 }
  }
}
