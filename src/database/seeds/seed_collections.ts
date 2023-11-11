import { Knex } from "knex";
import { COLLECTION } from "../../constants";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(COLLECTION).del();

    const initDate = new Date().toISOString();

    // Inserts seed entries
    await knex(COLLECTION).insert([
        { name: "Marvel", reward: "Free Cinema", created_at: initDate, updated_at: initDate },
        { name: "Fish", reward: "Discount to Spa", created_at: initDate, updated_at: initDate },
        { name: "Celebrities", reward: "Meet up with influencers", created_at: initDate, updated_at: initDate }
    ]);
};
