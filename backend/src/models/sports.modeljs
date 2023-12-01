const fs = require('fs');

const findAll = () => {
  const filePath = '/home/alexandre/Workspace/BetVenture/database.json';

  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (error, jsonData) => {
      if (error) {
        console.error('Erro ao ler o arquivo JSON:', error);
        reject(error);
        return;
      }
      try {
        const parsedData = JSON.parse(jsonData);
        const { sports } = parsedData;
        resolve(sports);  
      } catch (parseError) {
        console.error('Erro ao analisar o JSON:', parseError);
        reject(parseError);
      }
    });
  });
};

module.exports = {
  findAll,
};
