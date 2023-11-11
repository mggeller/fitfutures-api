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
        yield knex(constants_1.COLLECTION).del();
        const initDate = new Date().toISOString();
        let seedData = [{
                name: "Marvel",
                description: "When you have collected all the tokens in this collection you can go and see a movie of your choise in Finnkino for free!",
                reward: "Free Cinema",
                created_at: initDate,
                updated_at: initDate,
                picture_binary: 0
            },
            {
                name: "Fish",
                description: "When you have collected all the tokens in this collection you can visit Flamingo SPA with 50% discount!",
                reward: "Discount to Spa",
                created_at: initDate,
                updated_at: initDate,
                picture_binary: 0
            },
            {
                name: "Celebrities",
                description: `When you have collected all the tokens in this collection you get free tickets to Nike Training Day 2024! Biggest stars and influencers of Finland are there to train with You - Käärijä, Mmiisas, Erna Husko, Kimi Räikkönen, Kalle Rovanperä and many more. 
      It's not just a regular workout festival. It's a fun day planned with many different activities You can choose from. Invite a friend and come train with us!
      For more information: niketrainingday.com/2024`,
                reward: "Meet up with influencers",
                created_at: initDate,
                updated_at: initDate,
                picture_binary: 0
            }];
        let j = 0;
        for (let i = 18; i <= 20; i++) {
            const filename = `image-${i}.png`;
            const imageData = fs_1.default.readFileSync(filename);
            if (imageData) {
                let seedObject = seedData[j];
                seedObject.picture_binary = imageData;
                j++;
            }
        }
        // Inserts seed entries
        yield knex(constants_1.COLLECTION).insert(seedData);
    });
}
exports.seed = seed;
