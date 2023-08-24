const { authModel } = require('../models/');

const tokenGenerate = () => {
  const token = authModel.tokenGenerate();
  return { status: 'CREATED', data: token }
};

module.exports = {
  tokenGenerate,
};
