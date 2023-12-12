import TransactionHistoryModel from "../models/TransactionHistoryModel";

class TransactionHistoryService {
  constructor(private model = TransactionHistoryModel) {}

  public async getAllTransactionHistory(): Promise<TransactionHistoryModel[]> {
    return await this.model.findAll();
  };

  public async getById(id: string): Promise<TransactionHistoryModel | null> {
    return await this.model.findByPk(id);
  }

  public async postTransactionHistory(userId: string, type: string, amount: string, timestamp: string) {
    const insert = await this.model.create({  userId: Number(userId), type, amount: Number(amount), timestamp })
    return { status: 201, data: { message:  'Criado com sucesso', data: insert.dataValues }}
  }

  public async updateTransactionHistory(id: string, userId: string, type: string, amount: string, timestamp: string) {
    await this.model.update({ userId: Number(userId), type, amount: Number(amount), timestamp }, { where: { id: Number(id) } })
    return { status: 200, data: { message:  'Atualizado com sucesso', data: { id, userId, type, amount, timestamp } }}
  }

  public async deleteTransactionHistory(id: string) {
    await this.model.destroy({ where: { id: Number( id) }})
    return { status: 204 }
  }

  public async getByUser(userId: string) {
    const transactions = await this.model.findAll({ where: { userId } });
    return { status: 200, data: { transactions }}
  }
}

export default TransactionHistoryService;
