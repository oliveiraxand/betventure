"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('transaction_histories', {
            id: {
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
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
            type: {
                allowNull: false,
                type: sequelize_1.DataTypes.STRING,
            },
            amount: {
                allowNull: false,
                type: sequelize_1.DataTypes.INTEGER,
            },
            timestamp: {
                allowNull: false,
                type: sequelize_1.DataTypes.STRING
            }
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('transaction_histories');
    }
};
//# sourceMappingURL=06-create-transactionhistory.js.map