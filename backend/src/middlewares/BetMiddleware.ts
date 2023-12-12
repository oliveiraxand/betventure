import { NextFunction, Request, Response } from 'express';
import BetModel from '../models/BetModel';

async function verifyBet(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  try {
    const bet = await BetModel.findByPk(id);
    if(!bet) {
      return res.status(404).json({ message: 'Aposta não encontrado' });
    }
    next()
  } catch(error) {
    console.log('Erro', error);
    return res.status(500).json({ message: 'Erro Interno do Servidor' });
  }
};

export { verifyBet }
