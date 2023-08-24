  const { expect } = require('chai');
  const sinon = require('sinon');

const { authService } = require('../../../src/services');
const { authModel } = require('../../../src/models');
const { tokenFromModel } = require('../../mock/auth');

describe('Testes do AuthService', function () {
  it('Verifica se o token tem 16 caracteres', function () {
    sinon.stub(authModel, 'generateToken')
      .returns(tokenFromModel)
    
      const serviceResponse = authService.generateToken();
      expect(serviceResponse.data).to.equal(tokenFromModel);
      expect(serviceResponse.status).to.equal('CREATED');
  });
  afterEach(function () {
    sinon.restore();
  });
});