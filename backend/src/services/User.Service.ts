import UserModel from "../models/UserModel";
import Token from "../utils/token";
import TransactionHistoryService from "./TransactionHistory.Service";

class UserService {
  private token: Token;
  private transactions: TransactionHistoryService;
  constructor(private model = UserModel) {
    this.token = new Token();
    this.transactions = new TransactionHistoryService();
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

  public async login(username: string, _password: string) {
    const user = await this.model.findOne({ where: { username } })
      if(user) {
        const { id } = user.dataValues;
        const token = this.token.generateToken(id.toString(), username);
        return { status: 200, data: { token }};
      }
      return { status: 404, data: { message: 'Usuário não encontrado' } };
  }

  public async deposito(id:string, quantity: string) {
    const user = await this.getById(id);
    if(user)
    {
      const balance = user.dataValues.balance += Number(quantity);
      await this.model.update({balance}, {where: {id}})
      const now = Math.floor(new Date().getTime() / 1000)
      this.transactions.postTransactionHistory(id, 'DEPÓSITO', quantity, now.toString());
      return { status: 200, data: { message: 'Depósito realizado com sucesso' }}
    }
    return { status: 404, data: { message: 'Usuário não encontrado'} }
  }
  
  public async saque(id:string, quantity: string) {
    const user = await this.getById(id);
    if(user)
    {
      if(user.dataValues.balance > Number(quantity)) 
      {
        const balance = user.dataValues.balance -= Number(quantity);
        await this.model.update({balance}, {where: {id}})
        const now = Math.floor(new Date().getTime() / 1000)
        this.transactions.postTransactionHistory(id, 'SAQUE', quantity, now.toString());
        return { status: 200, data: { message: 'Saque realizado com sucesso' }}
      }
      return { status: 403, data: { message: 'Saldo insuficiente' } }
    }
    return { status: 404, data: { message: 'Usuário não encontrado'} }
  }

}

export default UserService;
