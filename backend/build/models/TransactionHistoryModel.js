"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const UserModel_1 = __importDefault(require("./UserModel"));
// import OtherModel from './OtherModel';
class TransactionHistoryModel extends sequelize_1.Model {
}
TransactionHistoryModel.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    type: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    amount: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    timestamp: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: _1.default,
    underscored: true,
    modelName: 'transaction_histories',
    timestamps: false,
});
TransactionHistoryModel.belongsTo(UserModel_1.default, { foreignKey: 'userId' });
exports.default = TransactionHistoryModel;
//# sourceMappingURL=TransactionHistoryModel.js.map