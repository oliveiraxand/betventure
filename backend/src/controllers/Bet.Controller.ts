import { Request, Response } from "express";
import BetService from "../services/Bet.Service";

export default class BetController {
  private _service: BetService;

  constructor() {
    this._service = new BetService();
    // Certifique-se de que o contexto (this) está vinculado corretamente
    this.getAllBets = this.getAllBets.bind(this);
    this.getById = this.getById.bind(this);
    this.createBet = this.createBet.bind(this);
    this.updateBet = this.updateBet.bind(this);
    this.deleteBet = this.deleteBet.bind(this);
    this.getBetByUser = this.getBetByUser.bind(this);
    this.finish = this.finish.bind(this);
  }

  public async getAllBets(_req: Request, res: Response) {
    const serviceResponse = await this._service.getAllBets();
    return res.status(200).json({ bets: serviceResponse });
  }

  public async getById(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await this._service.getById(id);
    return res.status(200).json({ bet: serviceResponse });
  }
  public async createBet(req: Request, res: Response) {
    const { userId, eventId, selection, status, stake } = req.body;
    const serviceResponse = await this._service
      .postBet(userId, eventId, selection, stake, status);
    return res.status(serviceResponse.status).json(serviceResponse.data);
  }

  public async updateBet(req: Request, res: Response) {
    const { userId, eventId, selection, status, stake } = req.body;
    const { id } = req.params;
    const serviceResponse = await this._service
      .updateBet(id, userId, eventId, selection, stake, status);
    return res.status(serviceResponse.status).json(serviceResponse.data);
  }

  public async deleteBet(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await this._service.deleteBet(id);
    return res.status(serviceResponse.status)
  }

  public async getBetByUser(req: Request, res: Response) {
    const { userId } = req.params;
    const serviceResponse = await this._service.getBetByUser(userId);
    return res.status(serviceResponse.status).json(serviceResponse.data);
  }

  public async finish(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await this._service.finish(id);
    return res.status(serviceResponse.status).json(serviceResponse.data);
  }
}