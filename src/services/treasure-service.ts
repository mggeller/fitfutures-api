import { connectToDatabase } from "../database";
import { getTokensforTreasureById, insertTokenInTreasure } from "../repositories/token-in-treasure-repository";
import { getAllTokens } from "../repositories/tokens-repository";
import {
  getTreasures,
  insertTreasure,
} from "../repositories/treasure-repository";
import { TokenInTreasure } from "../types/token-in-treasure";
import { Treasure } from "../types/treasure";
import { getRandomInRange } from "../util/randomlanglat";

export const generateNewTreasures = async () => {
  const initialDate = new Date().toISOString();

  for (let i = 0; i < 15; i++) {
    let randomLong = getRandomInRange(24803056, 25000000, 0);
    randomLong = randomLong / 1000000;
    let randomLat = getRandomInRange(60061567, 60261567, 0);
    randomLat = randomLat / 1000000;
    const treasure: Treasure = {
      coord_x: randomLong,
      coord_y: randomLat,
      name: "Treasure",
      created_at: initialDate,
      updated_at: initialDate,
    };

    const db = await connectToDatabase();
    const res = await insertTreasure(db, treasure);
    const tokens = await getAllTokens(db);
    const upperLimitId = tokens[tokens.length - 1].id;
    const bottomLimitId = tokens[0].id;
    const randomTokenId = getRandomInRange(bottomLimitId, upperLimitId, 0);

    const tokenInTreasure: TokenInTreasure = {
        token_id: randomTokenId,
        treasure_id: res.id,
    };

    await insertTokenInTreasure(db, tokenInTreasure);
  }
};

export const getAllTreasures = async () => {
  const db = await connectToDatabase();
  return await getTreasures(db);
};

export const getTokenInTreasure = async (treasureId: number) => {
    const db = await connectToDatabase();
    const response = await getTokensforTreasureById(db, treasureId);
    return response;
}
