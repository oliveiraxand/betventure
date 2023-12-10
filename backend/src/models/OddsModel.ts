import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
// import SportModel from './SportModel';
import EventModel from './EventModel';
// import OtherModel from './OtherModel';

class OddsModel extends Model<InferAttributes<OddsModel>,
InferCreationAttributes<OddsModel>> {
  declare eventId: CreationOptional<number>;
  declare home: CreationOptional<number>;
  declare away: CreationOptional<number>;
  declare draw: CreationOptional<number>;
}

OddsModel.init({
  eventId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // primaryKey: true,
    autoIncrement: true,
  },
  home: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  away: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  draw: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }}, {
  sequelize: db,
  underscored: true,
  modelName: 'odds',
  timestamps: false,
});

OddsModel.belongsTo(EventModel, { foreignKey: 'eventId' });

export default OddsModel;
