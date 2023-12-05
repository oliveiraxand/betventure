import UserModel from "../models/UserModel";

class UserService {
  constructor(private model = UserModel) {}
  public async getAllUser(): Promise<UserModel[]> {
    const users = await this.model.findAll();
    return users;
  }
}

export default UserService;
