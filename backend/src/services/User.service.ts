import UserModel from "../models/UserModel";

class UserService {
  constructor(private model = UserModel) {}
  public async getAllUser(): Promise<UserModel[]> {
    const users = await this.model.findAll();
    return users;
  };

  public async findById(id: string): Promise<UserModel | null> {
    return await this.model.findByPk(id);
  }
}

export default UserService;
