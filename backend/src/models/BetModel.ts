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
import UserModel from './UserModel';
// import OtherModel from './OtherModel';

class BetModel extends Model<InferAttributes<BetModel>,
InferCreationAttributes<BetModel>> {
  declare id: CreationOptional<number>;
  declare userId: CreationOptional<number>;
  declare eventId: CreationOptional<number>;
  declare selection: CreationOptional<string>;
  declare stake: CreationOptional<string>;
  declare odds: CreationOptional<number>;
  declare status: CreationOptional<string>;
}

BetModel.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  eventId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  selection: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stake: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  odds: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  sequelize: db,
  underscored: true,
  modelName: 'bets',
  timestamps: false,
});

BetModel.belongsTo(EventModel, { foreignKey: 'eventId' });
BetModel.belongsTo(UserModel, { foreignKey: 'userId' });

export default BetModel;
