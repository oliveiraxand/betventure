import { Request, Response } from "express";
import OddsService from "../services/Odds.Service";

class OddsController {
  private _service: OddsService;

  constructor() {
    this._service = new OddsService();
    // Certifique-se de que o contexto (this) está vinculado corretamente
    this.getAllOdds = this.getAllOdds.bind(this);
    this.getById = this.getById.bind(this);
    this.createOdds = this.createOdds.bind(this);
    this.updateOdds = this.updateOdds.bind(this);
    this.deleteOdds = this.deleteOdds.bind(this);
  }

  public async getAllOdds(_req: Request, res: Response) {
    const serviceResponse = await this._service.getAllOdds();
    return res.status(200).json({ sports: serviceResponse });
  }

  public async getById(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await this._service.getById(id);
    return res.status(200).json({ sport: serviceResponse });
  }

  public async createOdds(req: Request, res: Response) {
    const { eventId, home, away, draw } = req.body;
    const serviceResponse = await this._service.postOdds(eventId, home, away, draw);
    return res.status(serviceResponse.status).json(serviceResponse.data);
  }

  public async updateOdds(req: Request, res: Response) {
    const { home, away, draw } = req.body;
    const { eventId } = req.params;
    const serviceResponse = await this._service.updateOdds(eventId, home, away, draw);
    return res.status(serviceResponse.status).json(serviceResponse.data);
  }

  public async deleteOdds(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await this._service.deleteOdds(id);
    return res.status(serviceResponse.status)
  }
}

export default OddsController;
