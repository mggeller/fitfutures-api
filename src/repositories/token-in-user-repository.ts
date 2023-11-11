import { COLLECTION, TOKEN, TOKEN_IN_USER } from "../constants";
import { TokenInUser } from "../types/token-in-user";

export const insertTokenInUser = async (db: any, tokenInUser: TokenInUser) => {
  try {
    const ids = await db.insert(tokenInUser, ["id"]).into(TOKEN_IN_USER);
    return ids && ids.length && ids[0];
  } catch (error) {
    console.error("Failed to insert userintoken", error);
  }
};

export const getUserTokensCollection = async (db: any, userId: number) => {
  try {
    const collections = await db
      .where("tik.user_id", userId)
      .select('c.id', 'c.name', 'c.reward')
      .distinctOn('c.id')
      .from(`${TOKEN_IN_USER} as tik`)
      .leftJoin(`${TOKEN} as t`, 't.id', 'tik.token_id')
      .leftJoin(`${COLLECTION} as c`, 'c.id', 't.collection_id');
    return collections;
  } catch (error) {
    console.error("Faled to get User Collections from db", error);
  }
};

export const getUserTokensByUserId = async (db: any, userId: number, collectionId: number) => {
    try {
        const tokens = await db.where('tik.user_id', userId).andWhere('t.collection_id', collectionId).select('tik.token_id').from(`${TOKEN_IN_USER} as tik`).leftJoin(`${TOKEN} as t`, 't.id', 'tik.token_id');
        return tokens;
    } catch (error) {
        console.error('Failed to get User Tokens', error);
    }
}
