import { Model, QueryInterface, DataTypes } from 'sequelize';
import { Sport } from '../../types/Sport';

export default {
    up(queryInterface: QueryInterface) {
      return queryInterface.createTable<Model<Sport>>('sports', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        name: {
          allowNull: false,
          type: DataTypes.STRING,
        }
      })
    },
    down(queryInterface: QueryInterface) {
      return queryInterface.dropTable('sports')
    }
}