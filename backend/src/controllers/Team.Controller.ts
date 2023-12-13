import { Request, Response } from "express";
import TeamService from "../services/Team.Service";

class TeamController {
  private _service: TeamService;

  constructor() {
    this._service = new TeamService();
    // Certifique-se de que o contexto (this) está vinculado corretamente
    this.getAllTeams = this.getAllTeams.bind(this);
    this.getById = this.getById.bind(this);
    this.createTeam = this.createTeam.bind(this);
    this.updateTeam = this.updateTeam.bind(this);
    this.deleteTeam = this.deleteTeam.bind(this);
  }

  public async getAllTeams(_req: Request, res: Response) {
    const serviceResponse = await this._service.getAllTeams();
    return res.status(200).json({ teams: serviceResponse });
  }

  public async getById(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await this._service.getById(id);
    return res.status(200).json({ team: serviceResponse });
  }

  public async createTeam(req: Request, res: Response) {
    const { name, sportId } = req.body;
    const serviceResponse = await this._service.postTeam(name, sportId);
    return res.status(serviceResponse.status).json(serviceResponse.data);
  }

  public async updateTeam(req: Request, res: Response) {
    const { name, sportId } = req.body;
    const { id } = req.params;
    const serviceResponse = await this._service.updateTeam(id, name, sportId);
    return res.status(serviceResponse.status).json(serviceResponse.data);
  }

  public async deleteTeam(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await this._service.deleteTeam(id);
    return res.status(serviceResponse.status)
  }
}

export default TeamController;
