const { expect } = require('chai');
const sinon = require('sinon');

const { authService } = require('../../../src/services');
const { authController } = require('../../../src/controllers');

describe('Testes do AuthController', function () {
  it('Verifica se status da resposta é igual a 201', function () {
    sinon.stub(authService, 'generateToken')
      .returns({
        status: 'CREATED',
        data: '',
      });
    
      const req = {}
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      }

      authController.generateToken(req, res);
      expect(res.status.calledWith(201)).to.equal(true)
  });
});