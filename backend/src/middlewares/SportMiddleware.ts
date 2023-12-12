import { NextFunction, Request, Response } from 'express';
import SportModel from '../models/SportModel';

async function verifySport(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  try {
    const sport = await SportModel.findByPk(id);
    if(!sport) {
      return res.status(404).json({ message: 'Esporte não encontrado' });
    }
    next()
  } catch(error) {
    console.log('Erro', error);
    return res.status(500).json({ message: 'Erro Interno do Servidor' });
  }
};

export { verifySport }
