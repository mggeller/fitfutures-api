import { Knex } from "knex";

const tableName = "token";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable(tableName, (table) => {
    table.binary("picture_binary");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable(tableName, (table) => {
    // If you need to rollback, you can drop the 'picture' column and recreate it as a string
    table.dropColumn("picture_binary");
  });
}
