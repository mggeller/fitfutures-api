import { TREASURE } from "../constants";
import { Treasure } from "../types/treasure";

export const insertTreasure = async (db: any, treasures: Treasure[] | Treasure) => {
  try {
    const ids = await db.insert(treasures, ['id']).into(TREASURE);
    return ids && ids.length && ids[0];
  } catch (error) {
    console.error('failed inserting into DB', error);
  }
};

export const getTreasures = async (db: any): Promise<Treasure[]> => {
  return await db.select().from(TREASURE);
};
