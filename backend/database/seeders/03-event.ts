import { QueryInterface } from "sequelize";

export default {
  up: async(queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('events', [
      {
        id: 1, 
        sport_id: 1,
        name: 'oliveiraxand',
        date: '22/11/1999'
      },
      {
        id: 2, 
        sport_id: 1,
        name: 'oliveiraxand',
        date: '22/11/1999'
      },
      {
        id: 3, 
        sport_id: 1,
        name: 'oliveiraxand',
        date: '22/11/1999'
      },
    ])
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('events', {});
  }
}