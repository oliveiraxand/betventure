const { expect } = require('chai');
const { authModel } = require('../../../src/models');

describe('Testes do AuthModel', function () {
  it('Verifica se o token tem 16 caracteres', function() {
    const token = authModel.generateToken();
    expect(token.length).to.equal(16);
  });
  it('Verifica se está sendo o token gerado é aleatório', function(){
    const [firstToken, secondToken] = [authModel.generateToken(), authModel.generateToken()]
    expect(firstToken).to.not.equal(secondToken);
  });
});