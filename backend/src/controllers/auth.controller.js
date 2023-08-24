const { authService } = require('../services/');
const mapStatusHTTP = require('../utils/mapStatusHttp');

const generateToken = (_req, res) => {
  const serviceResponse = authService.generateToken();
  return res.status(mapStatusHTTP(serviceResponse.status)).json({ token: serviceResponse.data })
};

module.exports = {
  generateToken,
};
