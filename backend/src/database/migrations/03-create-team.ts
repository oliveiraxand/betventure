import { Model, QueryInterface, DataTypes } from 'sequelize';
import { Team } from '../../types/Team';

export default {
    up(queryInterface: QueryInterface) {
      return queryInterface.createTable<Model<Team>>('teams', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        name: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        sportId: {
          allowNull: false,
          field: 'sport_id',
          type: DataTypes.INTEGER,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          references: {
            model: 'sports',
            key: 'id',
          }
        },
      })
    },
    down(queryInterface: QueryInterface) {
      return queryInterface.dropTable('teams')
    }
}