import { Request, Response } from "express";
import AuthService from "../services/Auth.service";
  
class AuthController {
  constructor(private model = new AuthService()) {

  }

  public generateToken(req: Request, res: Response) {
    const { id, username } = req.body;
    const serviceResponse = this.model.generateToken(id, username);
    return res.status(201).json(serviceResponse.token);
  }

}

export default AuthController;

