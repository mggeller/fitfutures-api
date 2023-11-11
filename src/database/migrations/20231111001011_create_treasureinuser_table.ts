import { Knex } from "knex";

const tableName = "treasure_in_user";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(tableName, function (table) {
    table.increments();
    table.integer("treasure_id").notNullable();
    table.integer("user_id").notNullable();
    table.boolean("enabled").defaultTo(true);
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(tableName);
}
