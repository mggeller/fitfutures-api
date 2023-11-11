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
exports.getAllTreasures = exports.generateNewTreasures = void 0;
const database_1 = require("../database");
const treasure_repository_1 = require("../repositories/treasure-repository");
const randomlanglat_1 = require("../util/randomlanglat");
const generateNewTreasures = () => __awaiter(void 0, void 0, void 0, function* () {
    const initialDate = new Date().toISOString();
    let treasures = [];
    for (let i = 0; i < 15; i++) {
        const randomLong = (0, randomlanglat_1.getRandomInRange)(35, 15, 6);
        const randomLat = (0, randomlanglat_1.getRandomInRange)(70, 50, 6);
        const treasure = {
            coord_x: randomLong,
            coord_y: randomLat,
            name: "Treasure",
            created_at: initialDate,
            updated_at: initialDate,
        };
        treasures.push(treasure);
    }
    const db = yield (0, database_1.connectToDatabase)();
    const res = yield (0, treasure_repository_1.insertTreasure)(db, treasures);
});
exports.generateNewTreasures = generateNewTreasures;
const getAllTreasures = () => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield (0, database_1.connectToDatabase)();
    return yield (0, treasure_repository_1.getTreasures)(db);
});
exports.getAllTreasures = getAllTreasures;
