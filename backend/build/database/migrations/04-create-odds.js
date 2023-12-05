"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('odds', {
            eventId: {
                allowNull: false,
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                field: 'event_id',
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
                references: {
                    model: 'events',
                    key: 'id',
                },
            },
            home: {
                allowNull: false,
                type: sequelize_1.DataTypes.INTEGER,
            },
            away: {
                allowNull: false,
                type: sequelize_1.DataTypes.INTEGER,
            },
            draw: {
                allowNull: false,
                type: sequelize_1.DataTypes.INTEGER,
            }
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('odds');
    }
};
//# sourceMappingURL=04-create-odds.js.map