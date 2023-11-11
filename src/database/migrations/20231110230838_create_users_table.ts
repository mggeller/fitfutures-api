import { Knex } from "knex";

const tableName = "user";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(tableName, function (table) {
    table.increments();
    table.string("name").notNullable();
    table.integer("age").notNullable();
    table.integer("weight").notNullable();
    table.integer("height").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(tableName);
}

