import { Request, Response } from "express";
import UserService from "../services/User.Service";

class UserController {
  private _service: UserService;

  constructor() {
    this._service = new UserService();
    // Certifique-se de que o contexto (this) está vinculado corretamente
    this.getAllUsers = this.getAllUsers.bind(this);
    this.getById = this.getById.bind(this);
    this.createUser = this.createUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.login = this.login.bind(this);
    this.deposito = this.deposito.bind(this);
    this.saque = this.saque.bind(this);
  }

  public async getAllUsers(_req: Request, res: Response) {
    const serviceResponse = await this._service.getAllUsers();
    return res.status(200).json({ users: serviceResponse });
  }

  public async getById(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await this._service.getById(id);
    return res.status(200).json({ user: serviceResponse });
  }

  public async createUser(req: Request, res: Response) {
    const { username, password, balance } = req.body;
    const serviceResponse = await this._service.postUser(username, password, balance);
    return res.status(serviceResponse.status).json(serviceResponse.data);
  }

  public async updateUser(req: Request, res: Response) {
    const { username, password, balance } = req.body;
    const { id } = req.params;
    const serviceResponse = await this._service.updateUser(id, username, password, balance);
    return res.status(serviceResponse.status).json(serviceResponse.data);
  }

  public async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await this._service.deleteUser(id);
    return res.status(serviceResponse.status)
  }

  public async login(req: Request, res: Response) {
    const { username, password } = req.body;
    const serviceResponse = await this._service.login(username, password);
    return res.status(serviceResponse.status).json(serviceResponse.data);
  }

  public async deposito(req: Request, res:Response) {
    const { quantity } = req.body;
    const { id } = req.params;
    const serviceResponse = await this._service.deposito(id, quantity);
    return res.status(serviceResponse.status).json(serviceResponse.data);
  }

  public async saque(req: Request, res:Response) {
    const { quantity } = req.body;
    const { id } = req.params;
    const serviceResponse = await this._service.saque(id, quantity);
    return res.status(serviceResponse.status).json(serviceResponse.data);
  }

}

export default UserController;
