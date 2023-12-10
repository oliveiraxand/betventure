import AuthService from "../../../src/services/Auth.Service";

describe('Auth Service', () => {
  let authService = new AuthService();
  describe('generateToken', () => {
    it('Deve gerar um token e retornar o status CREATED', () => {
      const user = { id: '1', username: 'oliveiraxand' }
      const serviceResponse = authService.generateToken(user.id, user.username);
      expect(serviceResponse.status).toBe('CREATED');
      expect(serviceResponse).toHaveProperty('token');
    })
  })
})