const { expect } = require('chai');
const sinon = require('sinon');

const { sportService } = require('../../../src/services');
const { sportModel } = require('../../../src/models');

describe('Testes do Sports Service', function () {
  it('Verifica se retorna todos os sports', async function () {
    sinon.stub(sportModel, 'findAll')
      .resolves([
        {
          "id": 1,
          "name": "Futebol"
        },
        {
          "id": 2,
          "name": "Basquete"
        }
      ]);
    const serviceResponse = await sportService.findAll();
    expect(serviceResponse.status).to.equal('SUCCESSFUL');
  });
});