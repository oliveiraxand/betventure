import { sign } from "jsonwebtoken"
import { TokenGenerationResult } from "../interfaces/AuthInterface";

class AuthService {
  public secret;
  private expireIn;
  constructor() {
    this.secret = 'SECRET';
    this.expireIn = '24h'
  }
  
  public generateToken(id: string, username: string): TokenGenerationResult {
    const token = sign({ id, username }, this.secret, { expiresIn: this.expireIn })
    return { status: 'CREATED', token }
  }

}

export default AuthService;
