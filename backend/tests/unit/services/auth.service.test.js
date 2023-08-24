const { expect } = require('chai');
const { authService } = require('../../../src/services');
const sinon = require('sinon');
const { authModel } = require('../../../src/models');
const { tokenFromModel } = require('../../mock/auth');

describe('Testes do AuthService', function () {
  it('Verifica se o token tem 16 caracteres', function () {
    sinon.stub(authModel, 'tokenGenerate')
      .returns(tokenFromModel)
    
      const serviceResponse = authService.tokenGenerate();
      expect(serviceResponse.data).to.equal(tokenFromModel);
      expect(serviceResponse.status).to.equal('CREATED');
  });
});