import { NextFunction, Request, Response } from 'express';
import UserModel from '../models/UserModel';

async function verifyUser(req: Request, res: Response, next: NextFunction): Promise<void | Response> {
  const { id } = req.params;
  try {
    const user = await UserModel.findByPk(id);
    if(!user) {
      return res.status(404).json({message: 'Usuário não encontrado'});
    }
    next();
  } catch(error) {
    console.log('Erro:', error);
    return res.status(500).json({message: 'Erro interno do servidor'});
  }
}

export { verifyUser }