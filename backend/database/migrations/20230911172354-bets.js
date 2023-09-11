'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('bets', {
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
        }
      },
      eventId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'events',
          key: 'id'
        }
      },
      selection: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      stake: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      odds: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING
      }
    })
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('bets');
  }
};
