"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
// import OtherModel from './OtherModel';
class SportModel extends sequelize_1.Model {
}
SportModel.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: _1.default,
    underscored: true,
    modelName: 'sports',
    timestamps: false,
});
exports.default = SportModel;
//# sourceMappingURL=SportModel.js.map