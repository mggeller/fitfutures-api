import { Knex } from "knex";
import { TOKEN } from "../../constants";
import fs from 'fs';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(TOKEN).del();

    const initDate = new Date().toISOString();

    let seedData = [{ name: "Spider-Man", picture: "PictureURL", collection_id: 1, created_at: initDate, updated_at: initDate, picture_binary: 0 as unknown as Buffer },
    { name: "Iron Man", picture: "PictureURL", collection_id: 1, created_at: initDate, updated_at: initDate, picture_binary: 0 as unknown as Buffer },
    { name: "Captain America", picture: "PictureURL", collection_id: 1, created_at: initDate, updated_at: initDate, picture_binary: 0 as unknown as Buffer },
    { name: "Thor", picture: "PictureURL", collection_id: 1, created_at: initDate, updated_at: initDate, picture_binary: 0 as unknown as Buffer },
    { name: "Hulk", picture: "PictureURL", collection_id: 1, created_at: initDate, updated_at: initDate, picture_binary: 0 as unknown as Buffer },
    { name: "Salmon", picture: "PictureURL", collection_id: 2, created_at: initDate, updated_at: initDate, picture_binary: 0 as unknown as Buffer },
    { name: "Shark", picture: "PictureURL", collection_id: 2, created_at: initDate, updated_at: initDate, picture_binary: 0 as unknown as Buffer },
    { name: "Tuna", picture: "PictureURL", collection_id: 2, created_at: initDate, updated_at: initDate, picture_binary: 0 as unknown as Buffer },
    { name: "Käärija", picture: "PictureURL", collection_id: 3, created_at: initDate, updated_at: initDate, picture_binary: 0 as unknown as Buffer },
    { name: "Miisas", picture: "PictureURL", collection_id: 3, created_at: initDate, updated_at: initDate, picture_binary: 0 as unknown as Buffer },
    { name: "Mr. Beast ", picture: "PictureURL", collection_id: 3, created_at: initDate, updated_at: initDate, picture_binary: 0 as unknown as Buffer },
    { name: "David Dobrik", picture: "PictureURL", collection_id: 3, created_at: initDate, updated_at: initDate, picture_binary: 0 as unknown as Buffer },
    { name: "Kimi Räikkönen", picture: "PictureURL", collection_id: 3, created_at: initDate, updated_at: initDate, picture_binary: 0 as unknown as Buffer },
    { name: "Kalle Rovanperä", picture: "PictureURL", collection_id: 3, created_at: initDate, updated_at: initDate, picture_binary: 0 as unknown as Buffer },
    { name: "Erna Husko", picture: "PictureURL", collection_id: 3, created_at: initDate, updated_at: initDate, picture_binary: 0 as unknown as Buffer }];

    for (let i = 0; i < seedData.length; i++) {
        const filename = `image-${i + 1}.png`;
        const imageData = fs.readFileSync(filename);
        console.log('imageData', imageData);
        if (imageData) {
            let seedObject = seedData[i];
            seedObject.picture_binary = imageData;
        }
    }

    // Inserts seed entries
    await knex(TOKEN).insert(seedData);
};
