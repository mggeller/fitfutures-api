import { USER } from "../constants";
import { User } from "../types/user";

export const insertUser = async (db: any, user: User | User[]) => {
    try {
        const ids = await db.insert(user, ['id']).into(USER);
        return ids && ids.length && ids[0]; 
    } catch (error) {
        console.error('Failed to insert User', error);
    }
}