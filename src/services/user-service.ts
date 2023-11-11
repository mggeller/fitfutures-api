import { connectToDatabase } from "../database";
import { insertTokenInUser } from "../repositories/token-in-user-repository";
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

    if (!tokenInTreasure.id) {
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