'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('transactionHistory', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        type: {
          type: Sequelize.STRING,
          allowNull: false
        },
        amount: {
          type: Sequelize.FLOAT,
          allowNull: false
        },
        timestamp: {
          type: Sequelize.DATE,
          allowNull: false
        }
      }
    })
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('transactionHistory')
  }
};
