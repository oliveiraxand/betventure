import { QueryInterface } from "sequelize";

export default {
  up: async(queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        id: 1, 
        username: 'oliveiraxand',
        password: 'qwerty',
        balance: 0,
      },
      {
        id: 2, 
        username: 'oliveiraxand',
        password: 'qwerty',
        balance: 0,
      },
      {
        id: 3, 
        username: 'oliveiraxand',
        password: 'qwerty',
        balance: 0,
      },
    ])
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  }
}