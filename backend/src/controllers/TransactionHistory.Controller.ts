import { Request, Response } from "express";
import TransactionHistoryService from "../services/TransactionHistory.Service";

export default class TransactionHistoryController {
  private _service: TransactionHistoryService;

  constructor() {
    this._service = new TransactionHistoryService();
    // Certifique-se de que o contexto (this) está vinculado corretamente
    this.getAllTransactionHistorys = this.getAllTransactionHistorys.bind(this);
    this.getById = this.getById.bind(this);
    this.createTransactionHistory = this.createTransactionHistory.bind(this);
    this.updateTransactionHistory = this.updateTransactionHistory.bind(this);
    this.deleteTransactionHistory = this.deleteTransactionHistory.bind(this);
  }

  public async getAllTransactionHistorys(_req: Request, res: Response) {
    const serviceResponse = await this._service.getAllTransactionHistory();
    return res.status(200).json({ transactions: serviceResponse });
  }

  public async getById(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await this._service.getById(id);
    return res.status(200).json({ transaction: serviceResponse });
  }

  public async createTransactionHistory(req: Request, res: Response) {
    const { userId, type, amount, timestamp } = req.body;
    const serviceResponse = await this._service.postTransactionHistory(userId, type, amount, timestamp);
    return res.status(serviceResponse.status).json(serviceResponse.data);
  }

  public async updateTransactionHistory(req: Request, res: Response) {
    const { userId, type, amount, timestamp } = req.body;
    const { id } = req.params;
    const serviceResponse = await this._service.updateTransactionHistory(id, userId, type, amount, timestamp);
    return res.status(serviceResponse.status).json(serviceResponse.data);
  }

  public async deleteTransactionHistory(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await this._service.deleteTransactionHistory(id);
    return res.status(serviceResponse.status)
  }
}
