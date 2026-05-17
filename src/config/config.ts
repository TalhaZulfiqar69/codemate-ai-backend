import dotenv from 'dotenv';
dotenv.config();

interface DatabaseConfig {
  username: string | undefined;
  password: string | undefined;
  database: string | undefined;
  host: string | undefined;
  dialect: string | undefined;
  port: string | number;
}

interface Config {
  development: DatabaseConfig;
  test: DatabaseConfig;
  production: DatabaseConfig;
}

const config: Config = {
  development: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT,
    port: process.env.DATABASE_PORT || 5432,
  },
  test: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT,
    port: process.env.DATABASE_PORT || 5432,
  },
  production: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT,
    port: process.env.DATABASE_PORT || 5432,
  }
};

export default config;
