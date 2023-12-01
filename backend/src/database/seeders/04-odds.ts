import { QueryInterface } from "sequelize";

export default {
  up: async(queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('odds', [
      {
        event_id: 1, 
        home: 1,
        away: 1,
        draw: 1,
      },
      {
        event_id: 2, 
        home: 1,
        away: 1,
        draw: 1,
      },
      {
        event_id: 3, 
        home: 1,
        away: 1,
        draw: 1,
      },
    ])
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('odds', {});
  }
}