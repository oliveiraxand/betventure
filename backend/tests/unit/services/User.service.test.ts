import UserModel from "../../../src/models/UserModel"; 
import UserService from "../../../src/services/User.Service";
// import UserModel from '../models/UserModel';

// Mock para o modelo de usuário
jest.mock('../../../src/models/UserModel', () => ({
  findAll: jest.fn(),
  findByPk: jest.fn()
}));

describe('UserService', () => {
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getAllUser', () => {
    it('deve retornar uma lista de usuários', async () => {
      // Arrange
      const mockUsers = [
        { id: 1, username: 'oliveiraxand', password: 'qwerty', balance: 0 },
        { id: 2,username: 'oliveiraxand', password: 'qwerty', balance: 0 },
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
  describe('findById', () => {
    it('deve retornar um usuário pelo id', async () => {
      // Arrange
      const mockUser = {
        id: 1, username: 'oliveiraxand', password: 'qwerty', balance: 0 
      };
      const id = 1;
      // Mock
      (UserModel.findByPk as jest.Mock).mockResolvedValue(mockUser);
      // Act
      const result = await userService.findById(id.toString());
      // Assert
      expect(result).toEqual(mockUser);
      expect(UserModel.findByPk).toHaveBeenCalledTimes(1);
    })
  });
});
