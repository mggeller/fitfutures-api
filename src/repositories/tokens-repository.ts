import { TOKEN } from "../constants"

export const getAllTokens = async (db: any) => {
    try {
        const tokens = db.select().from(TOKEN);
        return tokens;
    } catch (error) {
        console.error('Failed getting tokens')
    }
}