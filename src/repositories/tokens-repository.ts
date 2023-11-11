import { TOKEN } from "../constants"

export const getAllTokens = async (db: any) => {
    try {
        const tokens = await db.select().from(TOKEN);
        return tokens;
    } catch (error) {
        console.error('Failed getting tokens')
    }
}

export const getAllTokensByCollectionId = async (db: any, collectionId: number) => {
    try {
        const tokens = await db.where('collection_id', collectionId).select().from(TOKEN);
        return tokens;
    } catch (error) {
        console.error('Failed to get All tokens belogning to Collection');
    }
}

