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
        username: 'rogerincambalhota',
        password: 'senha-betventure',
        balance: 300,
      },
      {
        id: 3, 
        username: 'douglasviegas',
        password: 'nuncamexa',
        balance: 499,
      },
    ])
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  }
}