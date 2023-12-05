"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
// import SportModel from './SportModel';
const EventModel_1 = __importDefault(require("./EventModel"));
const UserModel_1 = __importDefault(require("./UserModel"));
// import OtherModel from './OtherModel';
class BetModel extends sequelize_1.Model {
}
BetModel.init({
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
    eventId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    selection: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    stake: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    odds: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize: _1.default,
    underscored: true,
    modelName: 'bets',
    timestamps: false,
});
BetModel.belongsTo(EventModel_1.default, { foreignKey: 'eventId' });
BetModel.belongsTo(UserModel_1.default, { foreignKey: 'userId' });
exports.default = BetModel;
//# sourceMappingURL=BetModel.js.map