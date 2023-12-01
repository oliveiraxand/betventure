import { Sequelize } from 'sequelize';
import * as config from '../database/config/database';

const sequelize = new Sequelize(config)

export default sequelize;
