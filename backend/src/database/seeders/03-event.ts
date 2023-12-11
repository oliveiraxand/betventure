import { QueryInterface } from "sequelize";

export default {
  up: async(queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('events', [
      {
        id: 1, 
        sport_id: 1,
        name: 'Cleveland vs Garden',
        date: '2016/07/22'
      },
      {
        id: 2, 
        sport_id: 2,
        name: 'Barcelona vs Real Madrid',
        date: '2020/08/15'
      },
      {
        id: 3, 
        sport_id: 3,
        name: 'Brasil vs EUA',
        date: '2022/06/20'
      },
    ])
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('events', {});
  }
}