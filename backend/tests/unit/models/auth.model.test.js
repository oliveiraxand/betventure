const { expect } = require('chai');
const { authModel } = require('../../../src/models');

describe('Testes do AuthModel', function () {
  it('Testa a geração de token', function() {
    const token = authModel.tokenGenerate();
    expect(token.length).to.equal(16);
  })
});