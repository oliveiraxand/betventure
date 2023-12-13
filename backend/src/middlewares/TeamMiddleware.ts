import { NextFunction, Request, Response } from 'express';
import TeamModel from '../models/TeamModel';

async function verifyTeam(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  try {
    const sport = await TeamModel.findByPk(id);
    if(!sport) {
      return res.status(404).json({ message: 'Time não encontrado' });
    }
    next()
  } catch(error) {
    console.log('Erro', error);
    return res.status(500).json({ message: 'Erro Interno do Servidor' });
  }
};

export { verifyTeam }
