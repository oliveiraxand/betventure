import express from 'express';
import UserController from '../controllers/User.Controller';
import { authenticateToken } from '../middlewares/AuthMiddleware';
import { verifyUser, verifyLogin } from '../middlewares/UserMiddleware';
const userRouter = express.Router();
const userController = new UserController();

userRouter.get("/", authenticateToken, userController.getAllUsers);

userRouter.get("/:id", verifyUser, userController.getById);

userRouter.post("/", userController.createUser);

userRouter.post("/login", verifyLogin, userController.login);

userRouter.put("/:id", verifyUser, userController.updateUser);

userRouter.delete("/:id", verifyUser, userController.deleteUser);

userRouter.post("/:id/saque", verifyUser, userController.saque);

userRouter.post("/:id/deposito", verifyUser, userController.deposito);
export default userRouter;
