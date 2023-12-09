import { NextFunction, Request, Response } from 'express';
import { verify, VerifyErrors } from 'jsonwebtoken';
import AuthService from '../services/Auth.service';

interface CustomRequest extends Request {
  user?: any
}

export function authenticateToken(req: CustomRequest, res: Response, next: NextFunction): void {
  const token = req.header('Authorization');
  const authService = new AuthService();
  if (!token) {
    res.status(401).json({ message: 'Token não fornecido' });
    return;
  }

  verify(token, authService.secret, (err: VerifyErrors | null, decoded: any) => {
    if (err) {
      res.status(403).json({ message: 'Falha na autenticação do token' });
      return;
    }

    req.user = decoded;
    next();
  });
}
