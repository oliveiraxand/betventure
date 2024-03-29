import { Model, QueryInterface, DataTypes } from 'sequelize';
import { Odds } from "../../types/Odds";

export default {
  up(queryInterface: QueryInterface){
    return queryInterface.createTable<Model<Odds>>('odds', {
      eventId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'event_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'events',
          key: 'id',
        },
      },
      home: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      away: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      draw: {
        allowNull: false,
        type: DataTypes.FLOAT,
      }
    })

  },
  down(queryInterface: QueryInterface){
    return queryInterface.dropTable('odds')
  }
}