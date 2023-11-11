"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUsersTreasure = exports.getTokenInTreasure = exports.getAllTreasures = exports.generateNewTreasures = void 0;
const database_1 = require("../database");
const token_in_treasure_repository_1 = require("../repositories/token-in-treasure-repository");
const tokens_repository_1 = require("../repositories/tokens-repository");
const treasure_repository_1 = require("../repositories/treasure-repository");
const user_in_treasure_repository_1 = require("../repositories/user-in-treasure-repository");
const randomlanglat_1 = require("../util/randomlanglat");
const generateNewTreasures = () => __awaiter(void 0, void 0, void 0, function* () {
    const initialDate = new Date().toISOString();
    for (let i = 0; i < 15; i++) {
        let randomLong = (0, randomlanglat_1.getRandomInRange)(24803056, 25000000, 0);
        randomLong = randomLong / 1000000;
        let randomLat = (0, randomlanglat_1.getRandomInRange)(60061567, 60261567, 0);
        randomLat = randomLat / 1000000;
        const treasure = {
            coord_x: randomLong,
            coord_y: randomLat,
            name: "Treasure",
            created_at: initialDate,
            updated_at: initialDate,
        };
        const db = yield (0, database_1.connectToDatabase)();
        const res = yield (0, treasure_repository_1.insertTreasure)(db, treasure);
        const tokens = yield (0, tokens_repository_1.getAllTokens)(db);
        const upperLimitId = tokens[tokens.length - 1].id;
        const bottomLimitId = tokens[0].id;
        const randomTokenId = (0, randomlanglat_1.getRandomInRange)(bottomLimitId, upperLimitId, 0);
        const tokenInTreasure = {
            token_id: randomTokenId,
            treasure_id: res.id,
        };
        yield (0, token_in_treasure_repository_1.insertTokenInTreasure)(db, tokenInTreasure);
    }
});
exports.generateNewTreasures = generateNewTreasures;
const getAllTreasures = () => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield (0, database_1.connectToDatabase)();
    return yield (0, treasure_repository_1.getTreasures)(db);
});
exports.getAllTreasures = getAllTreasures;
const getTokenInTreasure = (treasureId) => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield (0, database_1.connectToDatabase)();
    const response = yield (0, token_in_treasure_repository_1.getTokensforTreasureById)(db, treasureId);
    return response[0];
});
exports.getTokenInTreasure = getTokenInTreasure;
const updateUsersTreasure = (userId, treasureId, enable) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedDateTime = new Date().toISOString();
    const updatedTreasureInUser = {
        user_id: userId,
        treasure_id: treasureId,
        enabled: enable,
        updated_at: updatedDateTime
    };
    const db = yield (0, database_1.connectToDatabase)();
    const response = yield (0, user_in_treasure_repository_1.updateUserTreasure)(db, updatedTreasureInUser);
    return response;
});
exports.updateUsersTreasure = updateUsersTreasure;
