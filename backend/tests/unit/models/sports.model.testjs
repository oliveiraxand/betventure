const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs').promises;

const { sportModel } = require('../../../src/models/'); 
const { mockSports } = require('../../mock/sports')

describe('Testes do Sport Model', function () {
  it('Retorna os sports corretamente', async function () {

    const readFileStub = sinon.stub(fs, 'readFile');
    readFileStub.resolves(JSON.stringify({ sports: mockSports }));

    const result = await sportModel.findAll();

    expect(result).to.deep.equal(mockSports);

    readFileStub.restore();
  });

  it('Lida com erro na leitura do arquivo', async function () {
    const readFileStub = sinon.stub(fs, 'readFile');
    readFileStub.rejects('Erro na leitura');

    try {
      await sportModel.findAll();
    } catch (error) {
      expect(error).to.equal('Erro na leitura');
    }

    readFileStub.restore();
  });

  it('Lida com erro na análise do JSON', async function () {
    const readFileStub = sinon.stub(fs, 'readFile');
    readFileStub.resolves('isso não é JSON');

    try {
      await sportModel.findAll();
    } catch (error) {
      expect(error).to.be.an('error'); 
    }

    readFileStub.restore();
  });
});
