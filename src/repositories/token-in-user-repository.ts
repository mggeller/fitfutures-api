import { TOKEN_IN_USER } from "../constants";
import { TokenInUser } from "../types/token-in-user";

export const insertTokenInUser = async (db: any, tokenInUser: TokenInUser) => {
  try {
    const ids = await db.insert(tokenInUser, ['id']).into(TOKEN_IN_USER);
    return ids && ids.length && ids[0];
  } catch (error) {
    console.error("Failed to insert userintoken", error);
  }
};
