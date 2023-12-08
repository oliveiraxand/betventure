import { sign } from "jsonwebtoken"

class Token {
  private secret;
  private expireIn;
  constructor() {
    this.secret = 'SECRET';
    this.expireIn = '24h'
  }

  public generateToken(id: string, username: string) {
    return sign({ id, username }, this.secret, { expiresIn: this.expireIn })
  }

  public verifyToken(token: string) {
    
  }

}

export default Token;
