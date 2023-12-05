"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
// import SportModel from './SportModel';
const EventModel_1 = __importDefault(require("./EventModel"));
// import OtherModel from './OtherModel';
class OddsModel extends sequelize_1.Model {
}
OddsModel.init({
    eventId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    home: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    away: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    draw: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize: _1.default,
    underscored: true,
    modelName: 'odds',
    timestamps: false,
});
OddsModel.belongsTo(EventModel_1.default, { foreignKey: 'eventId' });
exports.default = OddsModel;
//# sourceMappingURL=OddsModel.js.map