import { NextFunction, Request, Response } from 'express';
import EventModel from '../models/EventModel';

async function verifyEvent(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  try {
    const event = await EventModel.findByPk(id);
    if(!event) {
      return res.status(404).json({ message: 'Evento não encontrado' });
    }
    next()
  } catch(error) {
    console.log('Erro', error);
    return res.status(500).json({ message: 'Erro Interno do Servidor' });
  }
};

export { verifyEvent }
