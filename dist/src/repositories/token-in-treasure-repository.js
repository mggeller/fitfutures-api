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
exports.getTokensforTreasureById = exports.insertTokenInTreasure = void 0;
const constants_1 = require("../constants");
const insertTokenInTreasure = (db, tokenInTreasure) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ids = yield db.insert(tokenInTreasure, ["id"]).into(constants_1.TOKEN_IN_TREASURE);
        return ids && ids.length && ids[0];
    }
    catch (error) {
        console.error("Failed inserting into DB", error);
    }
});
exports.insertTokenInTreasure = insertTokenInTreasure;
const getTokensforTreasureById = (db, treasureId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tokens = yield db.where('treasure_id', treasureId).select().from(constants_1.TOKEN_IN_TREASURE).leftJoin(constants_1.TOKEN, `${constants_1.TOKEN_IN_TREASURE}.token_id`, `${constants_1.TOKEN}.id`);
        return tokens;
    }
    catch (error) {
        console.error('Failed getting tokens for Treasure', error);
    }
});
exports.getTokensforTreasureById = getTokensforTreasureById;
