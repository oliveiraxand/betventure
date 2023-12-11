import UserModel from "../models/UserModel";

class UserService {
  constructor(private model = UserModel) {}
  public async getAllUsers(): Promise<UserModel[]> {
    const users = await this.model.findAll();
    return users;
  };

  public async getById(id: string): Promise<UserModel | null> {
    return await this.model.findByPk(id);
  }

  public async postUser(username:string, password: string, balance: string) {
    const insert = await this.model.create({ username, password, balance: Number(balance) })
    return { status: 201, data: { message:  'Criado com sucesso', data: insert.dataValues }}
  }

  public async updateUser(id: string, username:string, password: string, balance: string) {
    await this.model.update({ username, password, balance: Number(balance) }, { where: { id: Number(id) } })
    return { status: 200, data: { message:  'Atualizado com sucesso', data: { id, username, password, balance } }}
  }

  public async deleteUser(id: string) {
    await this.model.destroy({ where: { id: Number( id) }})
    return { status: 204 }
  }
}

export default UserService;
