import { QueryInterface } from "sequelize";

export default {
  up: async(queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('transaction_histories', [
      {
        id: 1, 
        user_id: 1,
        type: 'a',
        amount: 1,
        timestamp: 'non-sei',
      },
      {
        id: 2, 
        user_id: 1,
        type: 'a',
        amount: 1,
        timestamp: 'non-sei',
      },
      {
        id: 3, 
        user_id: 1,
        type: 'a',
        amount: 1,
        timestamp: 'non-sei',
      },
    ])
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('transaction_histories', {});
  }
}