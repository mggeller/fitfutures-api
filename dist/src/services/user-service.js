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
exports.completeChallenge = exports.registerUser = void 0;
const database_1 = require("../database");
const token_in_user_repository_1 = require("../repositories/token-in-user-repository");
const user_repository_1 = require("../repositories/user-repository");
const treasure_service_1 = require("./treasure-service");
const registerUser = (name, age, weight, height) => __awaiter(void 0, void 0, void 0, function* () {
    const initialDate = new Date().toISOString();
    const user = {
        name,
        age,
        weight,
        height,
        created_at: initialDate,
        updated_at: initialDate
    };
    const db = yield (0, database_1.connectToDatabase)();
    const response = yield (0, user_repository_1.insertUser)(db, user);
    return response;
});
exports.registerUser = registerUser;
const completeChallenge = (userId, treasureId) => __awaiter(void 0, void 0, void 0, function* () {
    const initialDate = new Date().toISOString();
    // 1. Disable Treasure
    const updateResponse = yield (0, treasure_service_1.updateUsersTreasure)(userId, treasureId, false);
    if (!updateResponse) {
        return;
    }
    // 2. Add Token to User
    const tokenInTreasure = yield (0, treasure_service_1.getTokenInTreasure)(treasureId);
    if (!tokenInTreasure.id) {
        return;
    }
    const tokenInUser = {
        user_id: userId,
        token_id: tokenInTreasure.id,
        created_at: initialDate,
        updated_at: initialDate
    };
    const db = yield (0, database_1.connectToDatabase)();
    const tokenInUserId = yield (0, token_in_user_repository_1.insertTokenInUser)(db, tokenInUser);
    if (!tokenInUserId) {
        return;
    }
    return { id: tokenInTreasure.id, name: tokenInTreasure.name, picture: tokenInTreasure.picture };
});
exports.completeChallenge = completeChallenge;
