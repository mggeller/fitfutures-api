import * as path from "path";
import dotenv from "dotenv";

dotenv.config();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const connectionString = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?sslmode=${process.env.DB_SSL_MODE}`;

const config = {
  client: "pg",
  connection: connectionString,
  migrations: {
    tableName: "knex_migrations",
    directory: path.resolve(__dirname, "src", "database", "migrations"),
  },
  pool: {
    min: 2,
    max: 40,
  },
  seeds: {
    directory: path.resolve(__dirname, "src", "database", "seeds"),
  },
};

export default config;
