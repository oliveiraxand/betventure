"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const SportModel_1 = __importDefault(require("./SportModel"));
// import OtherModel from './OtherModel';
class EventModel extends sequelize_1.Model {
}
EventModel.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    sportId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: _1.default,
    underscored: true,
    modelName: 'events',
    timestamps: false,
});
EventModel.belongsTo(SportModel_1.default, { foreignKey: 'sportId' });
exports.default = EventModel;
