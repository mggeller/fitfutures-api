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
exports.getTreasures = exports.insertTreasure = void 0;
const constants_1 = require("../constants");
const insertTreasure = (db, treasures) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ids = yield db.insert(treasures).into(constants_1.TREASURE);
        return ids && ids.length && ids[0];
    }
    catch (error) {
        console.error('failed inserting into DB', error);
    }
});
exports.insertTreasure = insertTreasure;
const getTreasures = (db) => __awaiter(void 0, void 0, void 0, function* () {
    return yield db.select().from(constants_1.TREASURE);
});
exports.getTreasures = getTreasures;
