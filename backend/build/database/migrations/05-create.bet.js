"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('bets', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: sequelize_1.DataTypes.INTEGER
            },
            userId: {
                allowNull: false,
                type: sequelize_1.DataTypes.INTEGER,
                field: 'user_id',
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
                references: {
                    model: 'users',
                    key: 'id',
                },
            },
            eventId: {
                allowNull: false,
                type: sequelize_1.DataTypes.INTEGER,
                field: 'event_id',
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
                references: {
                    model: 'events',
                    key: 'id',
                },
            },
            selection: {
                allowNull: false,
                type: sequelize_1.DataTypes.STRING,
            },
            stake: {
                allowNull: false,
                type: sequelize_1.DataTypes.STRING,
            },
            odds: {
                allowNull: false,
                type: sequelize_1.DataTypes.INTEGER,
            },
            status: {
                allowNull: false,
                type: sequelize_1.DataTypes.STRING
            }
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('bets');
    },
};
