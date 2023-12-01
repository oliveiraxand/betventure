"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: sequelize_1.DataTypes.INTEGER
            },
            username: {
                allowNull: false,
                type: sequelize_1.DataTypes.STRING,
            },
            password: {
                allowNull: false,
                type: sequelize_1.DataTypes.STRING,
            },
            balance: {
                allowNull: false,
                type: sequelize_1.DataTypes.NUMBER,
            }
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('users');
    }
};
