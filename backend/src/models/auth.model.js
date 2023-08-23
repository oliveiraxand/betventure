const crypto = require ('crypto');

const tokenGenerate = () => {
  const token = crypto.randomBytes(8).toString('hex');
  return token;
}

module.exports = {
  tokenGenerate,
}