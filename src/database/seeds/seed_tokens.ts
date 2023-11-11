import { Knex } from "knex";
import { TOKEN } from "../../constants";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(TOKEN).del();

    const initDate = new Date().toISOString();

    // Inserts seed entries
    await knex(TOKEN).insert([
        { name: "Hulk", picture: "PictureURL", collection_id: 1, created_at: initDate, updated_at: initDate },
        { name: "Iron Man", picture: "PictureURL", collection_id: 1, created_at: initDate, updated_at: initDate },
        { name: "Thor", picture: "PictureURL", collection_id: 1, created_at: initDate, updated_at: initDate },
        { name: "Spider-Man", picture: "PictureURL", collection_id: 1, created_at: initDate, updated_at: initDate },
        { name: "Captain Marvel", picture: "PictureURL", collection_id: 1, created_at: initDate, updated_at: initDate },
        { name: "Salmon", picture: "PictureURL", collection_id: 2, created_at: initDate, updated_at: initDate },
        { name: "Shark", picture: "PictureURL", collection_id: 2, created_at: initDate, updated_at: initDate },
        { name: "Tuna", picture: "PictureURL", collection_id: 2, created_at: initDate, updated_at: initDate },
        { name: "Käärija", picture: "PictureURL", collection_id: 3, created_at: initDate, updated_at: initDate },
        { name: "Lordi", picture: "PictureURL", collection_id: 3, created_at: initDate, updated_at: initDate },
        { name: "Blind Channel", picture: "PictureURL", collection_id: 3, created_at: initDate, updated_at: initDate },
        { name: "Arttu Wiskari", picture: "PictureURL", collection_id: 3, created_at: initDate, updated_at: initDate },
        { name: "Mikael Gabriel", picture: "PictureURL", collection_id: 3, created_at: initDate, updated_at: initDate },
        { name: "Isac Elliot", picture: "PictureURL", collection_id: 3, created_at: initDate, updated_at: initDate },
        { name: "Mr. Beast ", picture: "PictureURL", collection_id: 3, created_at: initDate, updated_at: initDate },
    ]);
};
