import express, { Request, Response } from 'express';
import UserController from '../controllers/User.Controller';

const userRouter = express.Router();
const userController = new UserController();

userRouter.get("/get-all", userController.getAllUsers);

userRouter.get("/:id", userController.getById);

userRouter.post("/create", userController.createUser);

userRouter.put("/:id", userController.updateUser);

userRouter.delete("/:id", userController.deleteUser);

export default userRouter;
