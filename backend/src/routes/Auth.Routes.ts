import { Router, Request, Response } from "express";
import AuthController from "../controllers/Auth.Controller";

const authRouter = Router();
const authController = new AuthController();

authRouter.post("/token", (req: Request, res: Response) => {
  authController.generateToken(req, res);
});

export default authRouter;
