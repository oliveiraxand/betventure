import UserModel from "../../../src/models/UserModel"; 
import UserService from "../../../src/services/User.service";
// import UserModel from '../models/UserModel';

// Mock para o modelo de usuário
jest.mock('../../../src/models/UserModel', () => ({
  findAll: jest.fn(),
}));

describe('UserService', () => {
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService(UserModel);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getAllUser', () => {
    it('deve retornar uma lista de usuários', async () => {
      // Arrange
      const mockUsers = [
        { id: 1, name: 'User1' },
        { id: 2, name: 'User2' },
      ];

      // Mockando a função findAll do modelo
      (UserModel.findAll as jest.Mock).mockResolvedValue(mockUsers);

      // Act
      const result = await userService.getAllUser();

      // Assert
      expect(result).toEqual(mockUsers);
      expect(UserModel.findAll).toHaveBeenCalledTimes(1);
    });
  });
});
