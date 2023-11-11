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
exports.generateTreasures = exports.getAll = void 0;
const treasure_service_1 = require("../services/treasure-service");
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const treasures = yield (0, treasure_service_1.getAllTreasures)();
    if (!treasures || treasures.length === 0) {
        res.status(404);
    }
    res.status(200).json(treasures);
});
exports.getAll = getAll;
const generateTreasures = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, treasure_service_1.generateNewTreasures)();
    res.status(200);
});
exports.generateTreasures = generateTreasures;
