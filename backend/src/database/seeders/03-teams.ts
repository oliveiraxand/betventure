import { QueryInterface } from "sequelize";

export default {
  up: async(queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('teams', [
      {
        id: 1, 
        name: 'Cleveland',
        sport_id: 1
      },
      {
        id: 2, 
        name: 'São Paulo',
        sport_id: 2
      },
      {
        id: 3, 
        name: 'França',
        sport_id: 1
      },
    ])
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('teams', {});
  }
}