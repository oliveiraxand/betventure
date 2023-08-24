const { sportModel } = require('../models/');

const findAll = async () => {
  const sports = await sportModel.findAll();
  return { status: 'SUCCESSFUL', data: sports }
}

module.exports = {
  findAll,
}