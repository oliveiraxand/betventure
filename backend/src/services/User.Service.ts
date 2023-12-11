import UserModel from "../models/UserModel";
import Token from "../utils/token";

class UserService {
  private token: Token;
  constructor(private model = UserModel) {
    this.token = new Token();
  }
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

  public async login(username: string, password: string) {
    try {
      const user = await this.model.findOne({ where: { username } })
      if(user) {
        const { id } = user.dataValues;
        const token = this.token.generateToken(id.toString(), username)
        if(user.dataValues.password === password) {
          return { status: 200, data: { token } }
        }
        return { status: 401, data: { message: 'Login ou senha inválidos' }}
      } else {
        return { status: 404, data: { message: 'Usuário não encontrado' }}
      }
    } catch(error) {
        return { status: 500, data: { message: error }}
    }
  }
}

export default UserService;
