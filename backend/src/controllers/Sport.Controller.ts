import { Request, Response } from "express";
import SportService from "../services/Sport.Service";

class SportController {
  private _service: SportService;

  constructor() {
    this._service = new SportService();
    // Certifique-se de que o contexto (this) está vinculado corretamente
    this.getAllSports = this.getAllSports.bind(this);
    this.getById = this.getById.bind(this);
    this.createSport = this.createSport.bind(this);
    this.updateSport = this.updateSport.bind(this);
    this.deleteSport = this.deleteSport.bind(this);
  }

  public async getAllSports(_req: Request, res: Response) {
    const serviceResponse = await this._service.getAllSports();
    return res.status(200).json({ sports: serviceResponse });
  }

  public async getById(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await this._service.getById(id);
    return res.status(200).json({ sport: serviceResponse });
  }

  public async createSport(req: Request, res: Response) {
    const { name, date, sportId } = req.body;
    const serviceResponse = await this._service.postSport(name);
    return res.status(serviceResponse.status).json(serviceResponse.data);
  }

  public async updateSport(req: Request, res: Response) {
    const { name } = req.body;
    const { id } = req.params;
    const serviceResponse = await this._service.updateSport(id, name);
    return res.status(serviceResponse.status).json(serviceResponse.data);
  }

  public async deleteSport(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await this._service.deleteSport(id);
    return res.status(serviceResponse.status)
  }
}

export default SportController;
