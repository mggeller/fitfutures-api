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
exports.registerUser = void 0;
const database_1 = require("../database");
const user_repository_1 = require("../repositories/user-repository");
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
