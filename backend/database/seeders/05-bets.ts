import { QueryInterface } from "sequelize";

export default {
  up: async(queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('bets', [
      {
        id: 1, 
        user_id: 1,
        event_id: 1,
        selection: 'non-sei',
        stake: 'non-sei',
        odds: 1,
        status: 'ABC'
      },
      {
        id: 2, 
        user_id: 1,
        event_id: 1,
        selection: 'non-sei',
        stake: 'non-sei',
        odds: 1,
        status: 'ABC'
      },
      {
        id: 3, 
        user_id: 1,
        event_id: 1,
        selection: 'non-sei',
        stake: 'non-sei',
        odds: 1,
        status: 'ABC'
      },
    ])
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('bets', {});
  }
}