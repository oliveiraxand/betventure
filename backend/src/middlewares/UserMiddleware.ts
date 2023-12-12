import { NextFunction, Request, Response } from 'express';
import UserModel from '../models/UserModel';

async function verifyUser(req: Request, res: Response, next: NextFunction): Promise<void | Response> {
  const { id } = req.params;
  try {
    const user = await UserModel.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    next();
  } catch (error) {
    console.log('Erro:', error);
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
}

async function verifyLogin(req: Request, res: Response, next: NextFunction): Promise<void | Response> {
  const { username, password } = req.body;
  try {
    const user = await UserModel.findOne({ where: { username } });
    if (user) {
      if (!(user.dataValues.password === password)) {
        return res.status(401).json({ data: { message: 'Login ou senha inválidos' } });
      }
    } else {
      return res.status(404).json({ data: { message: 'Usuário não encontrado' } });
    }
  } catch (error) {
    console.log('Chegou', error);
    return res.status(500).json({ data: { message: 'Erro interno do servidor' } })
  }
  next();
}

export { verifyUser, verifyLogin }