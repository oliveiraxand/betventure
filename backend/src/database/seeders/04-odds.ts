import { QueryInterface } from "sequelize";

export default {
  up: async(queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('odds', [
      {
        event_id: 1, 
        home: 2.5,
        away: 3.0,
        draw: 2.2,
      },
      {
        event_id: 2, 
        home: 1.5,
        away: 2.0,
        draw: 1.3,
      },
      {
        event_id: 3, 
        home: 2.1,
        away: 2.5,
        draw: 1.8,
      },
    ])
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('odds', {});
  }
}