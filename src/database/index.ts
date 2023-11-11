import Knex from "knex";
import config from "../../knexfile";

export const connectToDatabase = async () => {
  const connection = Knex(config);
  
  return connection;
};
