import { Model, QueryInterface, DataTypes } from "sequelize";

import { Bet } from '../../src/types/Bet';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<Bet>>('bets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'user_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
        },
      },
      eventId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'event_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'events',
          key: 'id',
        },
      },
      selection: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      stake: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      odds: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING
      }
    })
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('bets')
  },
}