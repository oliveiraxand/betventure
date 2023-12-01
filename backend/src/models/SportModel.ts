import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
// import OtherModel from './OtherModel';

class SportModel extends Model<InferAttributes<SportModel>,
InferCreationAttributes<SportModel>> {
  declare id: CreationOptional<number>;
  declare name: CreationOptional<string>;
  
}

SportModel.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize: db,
  underscored: true,
  modelName: 'sports',
  timestamps: false,
});

export default SportModel;
