import { QueryInterface } from "sequelize";

export default {
  up: async(queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('sports', [
      {
        id: 1, 
        name: 'Basketball',
      },
      {
        id: 2, 
        name: 'Futebol',
      },
      {
        id: 3, 
        name: 'Volei',
      },
    ])
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('sports', {});
  }
}