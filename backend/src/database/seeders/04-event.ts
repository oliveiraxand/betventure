import { QueryInterface } from "sequelize";

export default {
  up: async(queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('events', [
      {
        id: 1, 
        sport_id: 1,
        name: 'Cleveland vs Garden',
        date: '2016/07/22',
        team_home_id: 1,
        team_away_id: 2,
      },
      {
        id: 2, 
        sport_id: 2,
        name: 'Barcelona vs Real Madrid',
        date: '2020/08/15',
        team_home_id: 1,
        team_away_id: 2,
      },
      {
        id: 3, 
        sport_id: 3,
        name: 'Brasil vs EUA',
        date: '2022/06/20',
        team_home_id: 1,
        team_away_id: 2,
      },
    ])
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('events', {});
  }
}