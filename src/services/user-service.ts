import { connectToDatabase } from "../database";
import { getUserTokensByUserId, getUserTokensCollection, insertTokenInUser } from "../repositories/token-in-user-repository";
import { getAllTokensByCollectionId } from "../repositories/tokens-repository";
import { getUserTreasureByIds } from "../repositories/user-in-treasure-repository";
import { insertUser } from "../repositories/user-repository";
import { TokenInUser } from "../types/token-in-user";
import { User } from "../types/user";
import { getTokenInTreasure, updateUsersTreasure } from "./treasure-service";

export const registerUser = async (name: string, age: number, weight: number, height: number) => {
    const initialDate = new Date().toISOString();

    const user: User = {
        name,
        age,
        weight,
        height,
        created_at: initialDate,
        updated_at: initialDate
    };

    const db = await connectToDatabase();
    const response = await insertUser(db, user);

    return response;
}

export const completeChallenge = async (userId: number, treasureId: number) => {
    const initialDate = new Date().toISOString();

    // 1. Disable Treasure
    const updateResponse = await updateUsersTreasure(userId, treasureId, false);

    if (!updateResponse) {
        return;
    }
    // 2. Add Token to User

    const tokenInTreasure = await getTokenInTreasure(treasureId);

    if (!tokenInTreasure || !tokenInTreasure.id) {
        return;
    }
    const tokenInUser: TokenInUser = {
        user_id: userId,
        token_id: tokenInTreasure.id,
        created_at: initialDate,
        updated_at: initialDate
    };

    const db = await connectToDatabase();
    const tokenInUserId = await insertTokenInUser(db, tokenInUser);

    if (!tokenInUserId) {
        return;
    }

    return { id: tokenInTreasure.id, name: tokenInTreasure.name, picture: tokenInTreasure.picture_binary};
}

export const getUserOwnedCollectionsAndTokens = async (userId: number) => {
    const db = await connectToDatabase();
    const collections = await getUserTokensCollection(db, userId);

    let responseArray = [];

    for(let i = 0; i < collections.length; i++) {
        const collection = collections[i];
        const tokens = await getAllTokensByCollectionId(db, collection.id);
        const userOwnedTokens = await getUserTokensByUserId(db, userId, collection.id);
        collection.tokens = tokens;
        collection.userOwnedTokens = userOwnedTokens;
        responseArray.push(collection);
    }

    return responseArray;
}

export const isTreasureEnabledForUser = async (userId: number, treasureId: number) => {
    const db = await connectToDatabase();
    const userTreasure = await getUserTreasureByIds(db, userId, treasureId);

    return userTreasure.length === 0 ? true : false;
}