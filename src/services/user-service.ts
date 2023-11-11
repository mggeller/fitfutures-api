import { connectToDatabase } from "../database";
import { insertUser } from "../repositories/user-repository";
import { User } from "../types/user";

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