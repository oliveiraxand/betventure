'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('odds', {
     eventId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'events',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
     },
     home: {
      allowNull: false,
      type: Sequelize.FLOAT
     }, 
     away: {
      allowNull: false,
      type: Sequelize.FLOAT
     },
     draw: {
      allowNull: false,
      type: Sequelize.FLOAT
     }
    })
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('odds');
  }
};
