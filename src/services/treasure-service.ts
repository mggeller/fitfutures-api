import { connectToDatabase } from "../database";
import { getTreasures, insertTreasure } from "../repositories/treasure-repository";
import { Treasure } from "../types/treasure";
import { getRandomInRange } from "../util/randomlanglat";

export const generateNewTreasures = async () => {
  const initialDate = new Date().toISOString();

  let treasures = [];
  for (let i = 0; i < 15; i++) {
    const randomLong = getRandomInRange(35, 15, 6);
    const randomLat = getRandomInRange(70, 50, 6);
    const treasure: Treasure = {
      coord_x: randomLong,
      coord_y: randomLat,
      name: "Treasure",
      created_at: initialDate,
      updated_at: initialDate,
    };
    treasures.push(treasure);
  }

  const db = await connectToDatabase();

  const res = await insertTreasure(db, treasures);
};

export const getAllTreasures = async () => {
    const db = await connectToDatabase();
    return await getTreasures(db);
}
