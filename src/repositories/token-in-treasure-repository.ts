import { TOKEN, TOKEN_IN_TREASURE } from "../constants";
import { TokenInTreasure } from "../types/token-in-treasure";

export const insertTokenInTreasure = async (db: any, tokenInTreasure: TokenInTreasure) => {
  try {
    const ids = await db.insert(tokenInTreasure, ["id"]).into(TOKEN_IN_TREASURE);
    return ids && ids.length && ids[0];
  } catch (error) {
    console.error("Failed inserting into DB", error);
  }
};


export const getTokensforTreasureById = async (db: any, treasureId: number) => {
    try {
        const tokens = await db.where('treasure_id', treasureId).select().from(TOKEN_IN_TREASURE).leftJoin(TOKEN, `${TOKEN_IN_TREASURE}.token_id`, `${TOKEN}.id`);
        return tokens;
    } catch (error) {
        console.error('Failed getting tokens for Treasure', error);
    }
}