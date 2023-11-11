import { Knex } from "knex";
import { COLLECTION } from "../../constants";
import fs from 'fs';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex(COLLECTION).del();

  const initDate = new Date().toISOString();

  let seedData = [{
    name: "Marvel",
    description:
      "When you have collected all the tokens in this collection you can go and see a movie of your choise in Finnkino for free!",
    reward: "Free Cinema",
    created_at: initDate,
    updated_at: initDate,
    picture_binary: 0 as unknown as Buffer
  },
  {
    name: "Fish",
    description:
      "When you have collected all the tokens in this collection you can visit Flamingo SPA with 50% discount!",
    reward: "Discount to Spa",
    created_at: initDate,
    updated_at: initDate,
    picture_binary: 0 as unknown as Buffer
  },
  {
    name: "Celebrities",
    description: `When you have collected all the tokens in this collection you get free tickets to Nike Training Day 2024! Biggest stars and influencers of Finland are there to train with You - Käärijä, Mmiisas, Erna Husko, Kimi Räikkönen, Kalle Rovanperä and many more. 
      It's not just a regular workout festival. It's a fun day planned with many different activities You can choose from. Invite a friend and come train with us!
      For more information: niketrainingday.com/2024`,
    reward: "Meet up with influencers",
    created_at: initDate,
    updated_at: initDate,
    picture_binary: 0 as unknown as Buffer
  }];

  let j = 0;
  for (let i = 18; i <= 20; i++) {
    const filename = `image-${i}.png`;
    const imageData = fs.readFileSync(filename);
    if (imageData) {
        let seedObject = seedData[j];
        seedObject.picture_binary = imageData;
        j++;
    }
}

  // Inserts seed entries
  await knex(COLLECTION).insert(seedData);
}
