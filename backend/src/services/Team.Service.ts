import TeamModel from "../models/TeamModel";

export default class TeamService {
  constructor(private model = TeamModel) {}

  public async getAllTeams(): Promise<TeamModel[]> {
    return await this.model.findAll();
  };

  public async getById(id: string): Promise<TeamModel | null> {
    return await this.model.findByPk(id);
  }

  public async postTeam(name:string, sportId: string) {
    const insert = await this.model.create({ name, sportId: Number(sportId) })
    return { status: 201, data: { message:  'Criado com sucesso', data: insert.dataValues }}
  }

  public async updateTeam(id: string, name:string, sportId: string) {
    await this.model.update({ name, sportId: Number(sportId) }, { where: { id: Number(id) } })
    return { status: 200, data: { message:  'Atualizado com sucesso', data: { id, name, sportId } }}
  }

  public async deleteTeam(id: string) {
    await this.model.destroy({ where: { id: Number( id) }})
    return { status: 204 }
  }
}
