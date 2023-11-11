import { COLLECTION } from "../constants";

export const getCollectionById = async (db: any, collectionId: number) => {
    try {
        const collection = await db.where('id', collectionId).first('name').from(COLLECTION);
        return collection;
    } catch (error) {
        console.error('Failed to get collection');
    }
}