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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
const constants_1 = require("../../constants");
const fs_1 = __importDefault(require("fs"));
function seed(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        // Deletes ALL existing entries
        yield knex(constants_1.TOKEN).del();
        const initDate = new Date().toISOString();
        let seedData = [{ name: "Spider-Man", picture: "PictureURL", collection_id: 1, created_at: initDate, updated_at: initDate, picture_binary: 0 },
            { name: "Iron Man", picture: "PictureURL", collection_id: 1, created_at: initDate, updated_at: initDate, picture_binary: 0 },
            { name: "Captain America", picture: "PictureURL", collection_id: 1, created_at: initDate, updated_at: initDate, picture_binary: 0 },
            { name: "Thor", picture: "PictureURL", collection_id: 1, created_at: initDate, updated_at: initDate, picture_binary: 0 },
            { name: "Hulk", picture: "PictureURL", collection_id: 1, created_at: initDate, updated_at: initDate, picture_binary: 0 },
            { name: "Salmon", picture: "PictureURL", collection_id: 2, created_at: initDate, updated_at: initDate, picture_binary: 0 },
            { name: "Shark", picture: "PictureURL", collection_id: 2, created_at: initDate, updated_at: initDate, picture_binary: 0 },
            { name: "Tuna", picture: "PictureURL", collection_id: 2, created_at: initDate, updated_at: initDate, picture_binary: 0 },
            { name: "Käärija", picture: "PictureURL", collection_id: 3, created_at: initDate, updated_at: initDate, picture_binary: 0 },
            { name: "Miisas", picture: "PictureURL", collection_id: 3, created_at: initDate, updated_at: initDate, picture_binary: 0 },
            { name: "Mr. Beast ", picture: "PictureURL", collection_id: 3, created_at: initDate, updated_at: initDate, picture_binary: 0 },
            { name: "David Dobrik", picture: "PictureURL", collection_id: 3, created_at: initDate, updated_at: initDate, picture_binary: 0 },
            { name: "Kimi Räikkönen", picture: "PictureURL", collection_id: 3, created_at: initDate, updated_at: initDate, picture_binary: 0 },
            { name: "Kalle Rovanperä", picture: "PictureURL", collection_id: 3, created_at: initDate, updated_at: initDate, picture_binary: 0 },
            { name: "Erna Husko", picture: "PictureURL", collection_id: 3, created_at: initDate, updated_at: initDate, picture_binary: 0 }];
        for (let i = 0; i < seedData.length; i++) {
            const filename = `image-${i + 1}.png`;
            const imageData = fs_1.default.readFileSync(filename);
            if (imageData) {
                let seedObject = seedData[i];
                seedObject.picture_binary = imageData;
            }
        }
        // Inserts seed entries
        yield knex(constants_1.TOKEN).insert(seedData);
    });
}
exports.seed = seed;
;
