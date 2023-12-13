import { Model, QueryInterface, DataTypes } from 'sequelize';
import { Event } from '../../types/Event';

export default {
  up(queryInterface: QueryInterface){
    return queryInterface.createTable<Model<Event>>('events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
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
      teamHomeId: {
        allowNull: false,
        field: 'team_home_id',
        type: DataTypes.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'teams',
          key: 'id',
        }
      },
      teamAwayId: {
        allowNull: false,
        field: 'team_away_id',
        type: DataTypes.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'teams',
          key: 'id',
        }
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      date: {
        allowNull: false,
        type: DataTypes.STRING,
      }
    })
  },
  down(queryInterface: QueryInterface){
    return queryInterface.dropTable('events')
  }
}