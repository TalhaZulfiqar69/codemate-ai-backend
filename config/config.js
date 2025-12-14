import dotenv from 'dotenv';

dotenv.config();

const config = {
  development: {
    username: process.env.DATABASE_USERNAME || 'postgres',
    password: process.env.DATABASE_PASSWORD || null,
    database: process.env.DATABASE_DATABASE || 'database_test',
    host: process.env.DATABASE_HOST || '127.0.0.1',
    dialect: process.env.DATABASE_DIALECT || 'postgres',
  },
  test: {
    username: process.env.DATABASE_USERNAME || 'root',
    password: process.env.DATABASE_PASSWORD || null,
    database: process.env.DATABASE_DATABASE || 'database_test',
    host: process.env.DATABASE_HOST || '127.0.0.1',
    dialect: process.env.DATABASE_DIALECT || 'mysql',
  },
  production: {
    username: process.env.DATABASE_USERNAME || 'root',
    password: process.env.DATABASE_PASSWORD || null,
    database: process.env.DATABASE_DATABASE || 'database_production',
    host: process.env.DATABASE_HOST || '127.0.0.1',
    dialect: process.env.DATABASE_DIALECT || 'mysql',
  }
};

export default config;
