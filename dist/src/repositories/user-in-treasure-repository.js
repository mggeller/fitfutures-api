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
exports.getTreasureAmountInTimeFrame = exports.getUserTreasureByIds = exports.updateUserTreasure = void 0;
const constants_1 = require("../constants");
const updateUserTreasure = (db, userInTreasure) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ids = yield db.insert(userInTreasure, ["id"]).into(constants_1.TREASURE_IN_USER);
        return ids && ids.length && ids[0];
    }
    catch (error) {
        console.error("Failed to update the Users treasure");
    }
});
exports.updateUserTreasure = updateUserTreasure;
const getUserTreasureByIds = (db, userId, treasureId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userTreasure = yield db.where('user_id', userId).andWhere('treasure_id', treasureId).select().from(constants_1.TREASURE_IN_USER);
        return userTreasure;
    }
    catch (error) {
        console.error('Failed to get Users treasure', error);
    }
});
exports.getUserTreasureByIds = getUserTreasureByIds;
const getTreasureAmountInTimeFrame = (db, userId, fromDate, toDate) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const treasures = yield db.where('user_id', userId).andWhere('created_at', '>=', fromDate).andWhere('created_at', '<', toDate).select().from(constants_1.TREASURE_IN_USER);
        return treasures;
    }
    catch (error) {
        console.error('Failed to get treasure in specific time frame');
    }
});
exports.getTreasureAmountInTimeFrame = getTreasureAmountInTimeFrame;
