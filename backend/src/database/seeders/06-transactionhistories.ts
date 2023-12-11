import { QueryInterface } from "sequelize";

export default {
  up: async(queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('transaction_histories', [
      {
        id: 1, 
        user_id: 1,
        type: 'SAQUE',
        amount: 500,
        timestamp: '1637000000000',
      },
      {
        id: 2, 
        user_id: 2,
        type: 'DEPÓSITO',
        amount: 300,
        timestamp: '1574000100000',
      },
      {
        id: 3, 
        user_id: 3,
        type: 'DEPÓSITO',
        amount: 499,
        timestamp: '1311000100000',
      },
    ])
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('transaction_histories', {});
  }
}