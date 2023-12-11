import express from 'express';
import UserController from '../controllers/User.Controller';
import { authenticateToken } from '../middlewares/AuthMiddleware';
const userRouter = express.Router();
const userController = new UserController();

userRouter.get("/get-all", authenticateToken, userController.getAllUsers);

userRouter.get("/:id", userController.getById);

userRouter.post("/create", userController.createUser);

userRouter.put("/:id", userController.updateUser);

userRouter.delete("/:id", userController.deleteUser);

userRouter.post("/login", userController.login);
export default userRouter;
