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
exports.seed = void 0;
const constants_1 = require("../../constants");
function seed(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        // Deletes ALL existing entries
        yield knex(constants_1.COLLECTION).del();
        const initDate = new Date().toISOString();
        // Inserts seed entries
        yield knex(constants_1.COLLECTION).insert([
            { name: "Marvel", reward: "Free Cinema", created_at: initDate, updated_at: initDate },
            { name: "Fish", reward: "Discount to Spa", created_at: initDate, updated_at: initDate },
            { name: "Celebrities", reward: "Meet up with influencers", created_at: initDate, updated_at: initDate }
        ]);
    });
}
exports.seed = seed;
;
