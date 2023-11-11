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
exports.getUserTokensByUserId = exports.getUserTokensCollection = exports.insertTokenInUser = void 0;
const constants_1 = require("../constants");
const insertTokenInUser = (db, tokenInUser) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ids = yield db.insert(tokenInUser, ["id"]).into(constants_1.TOKEN_IN_USER);
        return ids && ids.length && ids[0];
    }
    catch (error) {
        console.error("Failed to insert userintoken", error);
    }
});
exports.insertTokenInUser = insertTokenInUser;
const getUserTokensCollection = (db, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const collections = yield db
            .where("tik.user_id", userId)
            .select('c.id', 'c.name', 'c.reward', 'c.description', 'c.picture_binary')
            .distinctOn('c.id')
            .from(`${constants_1.TOKEN_IN_USER} as tik`)
            .leftJoin(`${constants_1.TOKEN} as t`, 't.id', 'tik.token_id')
            .leftJoin(`${constants_1.COLLECTION} as c`, 'c.id', 't.collection_id');
        return collections;
    }
    catch (error) {
        console.error("Faled to get User Collections from db", error);
    }
});
exports.getUserTokensCollection = getUserTokensCollection;
const getUserTokensByUserId = (db, userId, collectionId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tokens = yield db.where('tik.user_id', userId).andWhere('t.collection_id', collectionId).select('tik.token_id').from(`${constants_1.TOKEN_IN_USER} as tik`).leftJoin(`${constants_1.TOKEN} as t`, 't.id', 'tik.token_id');
        return tokens;
    }
    catch (error) {
        console.error('Failed to get User Tokens', error);
    }
});
exports.getUserTokensByUserId = getUserTokensByUserId;
