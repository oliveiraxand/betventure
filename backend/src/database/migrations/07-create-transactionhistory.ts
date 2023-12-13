import { Model, QueryInterface, DataTypes } from 'sequelize';

import { TransactionHistory } from '../../types/TransactionHistory';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<TransactionHistory>>('transaction_histories', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
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
      type: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      amount: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      timestamp: {
        allowNull: false,
        type: DataTypes.STRING
      }
    })
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('transaction_histories');
  }
}