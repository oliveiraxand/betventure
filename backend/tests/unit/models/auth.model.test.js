const { expect } = require('chai');
const { authModel } = require('../../../src/models');

describe('Testes do AuthModel', function () {
  it('Verifica se o token tem 16 caracteres', function() {
    const token = authModel.tokenGenerate();
    expect(token.length).to.equal(16);
  });
  it('Verifica se está sendo o token gerado é aleatório', function(){
    const [firstToken, secondToken] = [authModel.tokenGenerate(), authModel.tokenGenerate()]
    expect(firstToken).to.not.equal(secondToken);
  });
});