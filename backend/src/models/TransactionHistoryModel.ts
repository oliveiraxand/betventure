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

class TransactionHistoryModel extends Model<InferAttributes<TransactionHistoryModel>,
InferCreationAttributes<TransactionHistoryModel>> {
  declare id: CreationOptional<number>;
  declare userId: CreationOptional<number>;
  declare type: CreationOptional<string>;
  declare amount: CreationOptional<number>;
  declare timestamp: CreationOptional<string>;
}

TransactionHistoryModel.init({
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
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  underscored: true,
  modelName: 'transaction_histories',
  timestamps: false,
});

TransactionHistoryModel.belongsTo(UserModel, { foreignKey: 'userId' });

export default TransactionHistoryModel;
