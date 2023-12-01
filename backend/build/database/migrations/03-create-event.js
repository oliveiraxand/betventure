"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('events', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: sequelize_1.DataTypes.INTEGER
            },
            sportId: {
                allowNull: false,
                field: 'sport_id',
                type: sequelize_1.DataTypes.INTEGER,
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
                references: {
                    model: 'sports',
                    key: 'id',
                }
            },
            name: {
                allowNull: false,
                type: sequelize_1.DataTypes.STRING,
            },
            date: {
                allowNull: false,
                type: sequelize_1.DataTypes.STRING,
            }
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('events');
    }
};
