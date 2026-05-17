import dotenv from 'dotenv';
dotenv.config();
import { Sequelize } from 'sequelize';

const APP_VERSION = process.env.NODE_ENV || 'development';

const DATABASE_NAME = process.env.DATABASE_NAME;
const DATABASE_USERNAME = process.env.DATABASE_USERNAME;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
const DATABASE_HOST = process.env.DATABASE_HOST;
const DATABASE_DIALECT = process.env.DATABASE_DIALECT;

const sequelize = new Sequelize(
  DATABASE_NAME || '',
  DATABASE_USERNAME || '',
  DATABASE_PASSWORD || '',
  {
    host: DATABASE_HOST,
    dialect: DATABASE_DIALECT as any,
    pool: {
      max: 30,
      min: 0,
      acquire: 60000,
      idle: 5000,
    },
  }
);

try {
  sequelize.authenticate();
  console.log(
    'Database connection established successfully.',
    APP_VERSION + ' environment is connected'
  );
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelize;
