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
import TeamModel from './TeamModel';
// import OtherModel from './OtherModel';

class EventModel extends Model<InferAttributes<EventModel>,
InferCreationAttributes<EventModel>> {
  declare id: CreationOptional<number>;
  declare name: CreationOptional<string>;
  declare sportId: CreationOptional<number>;
  declare date: CreationOptional<string>;
  declare teamHomeId: CreationOptional<number>;
  declare teamAwayId: CreationOptional<number>;
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
  teamHomeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  teamAwayId: {
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
EventModel.belongsTo(TeamModel, { foreignKey: 'teamHomeId' });
EventModel.belongsTo(TeamModel, { foreignKey: 'teamAwayId' });
  
export default EventModel;
