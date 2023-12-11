import { QueryInterface } from "sequelize";

export default {
  up: async(queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('events', [
      {
        id: 1, 
        sport_id: 1,
        name: 'Cleveland vs Garden',
        date: '22/07/2016'
      },
      {
        id: 2, 
        sport_id: 2,
        name: 'Barcelona vs Real Madrid',
        date: '15/08/2020'
      },
      {
        id: 3, 
        sport_id: 3,
        name: 'Brasil vs EUA',
        date: '20/06/2022'
      },
    ])
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('events', {});
  }
}