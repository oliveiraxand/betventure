import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import SportModel from './SportModel';
import OddsModel from './OddsModel';
// import OtherModel from './OtherModel';

class EventModel extends Model<InferAttributes<EventModel>,
InferCreationAttributes<EventModel>> {
  declare id: CreationOptional<number>;
  declare name: CreationOptional<string>;
  declare sportId: CreationOptional<number>;
  declare date: CreationOptional<string>;
}

EventModel.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sportId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  underscored: true,
  modelName: 'events',
  timestamps: false,
});

EventModel.belongsTo(SportModel, { foreignKey: 'sportId' });
EventModel.hasMany(OddsModel, { foreignKey: 'eventId', as: 'Probabilidades' });
  
export default EventModel;
