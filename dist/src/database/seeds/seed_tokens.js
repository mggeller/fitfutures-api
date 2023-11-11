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
        yield knex(constants_1.TOKEN).del();
        const initDate = new Date().toISOString();
        // Inserts seed entries
        yield knex(constants_1.TOKEN).insert([
            { name: "Hulk", picture: "PictureURL", collection_id: 1, created_at: initDate, updated_at: initDate },
            { name: "Iron Man", picture: "PictureURL", collection_id: 1, created_at: initDate, updated_at: initDate },
            { name: "Thor", picture: "PictureURL", collection_id: 1, created_at: initDate, updated_at: initDate },
            { name: "Spider-Man", picture: "PictureURL", collection_id: 1, created_at: initDate, updated_at: initDate },
            { name: "Captain Marvel", picture: "PictureURL", collection_id: 1, created_at: initDate, updated_at: initDate },
            { name: "Salmon", picture: "PictureURL", collection_id: 2, created_at: initDate, updated_at: initDate },
            { name: "Shark", picture: "PictureURL", collection_id: 2, created_at: initDate, updated_at: initDate },
            { name: "Tuna", picture: "PictureURL", collection_id: 2, created_at: initDate, updated_at: initDate },
            { name: "Käärija", picture: "PictureURL", collection_id: 3, created_at: initDate, updated_at: initDate },
            { name: "Lordi", picture: "PictureURL", collection_id: 3, created_at: initDate, updated_at: initDate },
            { name: "Blind Channel", picture: "PictureURL", collection_id: 3, created_at: initDate, updated_at: initDate },
            { name: "Arttu Wiskari", picture: "PictureURL", collection_id: 3, created_at: initDate, updated_at: initDate },
            { name: "Mikael Gabriel", picture: "PictureURL", collection_id: 3, created_at: initDate, updated_at: initDate },
            { name: "Isac Elliot", picture: "PictureURL", collection_id: 3, created_at: initDate, updated_at: initDate },
            { name: "Mr. Beast ", picture: "PictureURL", collection_id: 3, created_at: initDate, updated_at: initDate },
        ]);
    });
}
exports.seed = seed;
;
