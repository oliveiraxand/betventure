import { QueryInterface } from "sequelize";

export default {
  up: async(queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('sports', [
      {
        id: 1, 
        name: 'oliveiraxand',
      },
      {
        id: 2, 
        name: 'oliveiraxand',
      },
      {
        id: 3, 
        name: 'oliveiraxand',
      },
    ])
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('sports', {});
  }
}