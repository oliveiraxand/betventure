"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('sports', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: sequelize_1.DataTypes.INTEGER
            },
            name: {
                allowNull: false,
                type: sequelize_1.DataTypes.STRING,
            }
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('sports');
    }
};
//# sourceMappingURL=02-create-sport.js.map