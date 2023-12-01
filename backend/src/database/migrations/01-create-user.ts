import { Model, QueryInterface, DataTypes } from 'sequelize';

import { User } from '../../types/User';

export default {
  up(queryInterface: QueryInterface) {
	return queryInterface.createTable<Model<User>>('users', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		username: {
			allowNull: false,
			type: DataTypes.STRING,
		},
		password: {
			allowNull: false,
			type: DataTypes.STRING,
		},
		balance: {
			allowNull: false,
			type: DataTypes.NUMBER,
		}
	})
  },
	down(queryInterface: QueryInterface) {
		return queryInterface.dropTable('users')
	}
}