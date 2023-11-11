import { TREASURE_IN_USER } from "../constants";
import { UserInTreasure } from "../types/user-in-treasure";

export const updateUserTreasure = async (
  db: any,
  userInTreasure: UserInTreasure
) => {
  try {
    const ids = await db.insert(userInTreasure, ["id"]).into(TREASURE_IN_USER);
    return ids && ids.length && ids[0];
  } catch (error) {
    console.error("Failed to update the Users treasure");
  }
};

export const getUserTreasureByIds = async (db: any, userId: number, treasureId: number) => {
  try {
    const userTreasure = await db.where('user_id', userId).andWhere('treasure_id', treasureId).select().from(TREASURE_IN_USER);
    return userTreasure;
  } catch (error) {
    console.error('Failed to get Users treasure', error);
  }
}

export const getTreasureAmountInTimeFrame = async (db: any, userId: number, fromDate: string, toDate: string) => {
  try {
    const treasures = await db.where('user_id', userId).andWhere('created_at', '>=', fromDate).andWhere('created_at', '<', toDate).select().from(TREASURE_IN_USER);
    return treasures;
  } catch (error) {
    console.error('Failed to get treasure in specific time frame');
  }
}
