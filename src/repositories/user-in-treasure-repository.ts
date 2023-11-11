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
