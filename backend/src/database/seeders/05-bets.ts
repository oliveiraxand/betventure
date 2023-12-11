import { QueryInterface } from "sequelize";

export default {
  up: async(queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('bets', [
      {
        id: 1, 
        user_id: 1,
        event_id: 1,
        selection: 'home', 
        stake: 10,
        status: 'ativo'
      },
      {
        id: 2, 
        user_id: 2,
        event_id: 1,
        selection: 'away', 
        stake: 10,
        status: 'ativo'
      },
      {
        id: 3, 
        user_id: 2,
        event_id: 2,
        selection: 'draw', 
        stake: 10,
        status: 'encerrado'
      },
    ])
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('bets', {});
  }
}