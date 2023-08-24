const { authModel } = require('../models/');

const generateToken = () => {
  const token = authModel.generateToken();
  return { status: 'CREATED', data: token }
};

module.exports = {
  generateToken,
};
