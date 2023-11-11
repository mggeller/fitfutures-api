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
exports.register = void 0;
const user_service_1 = require("../services/user-service");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    if (!user) {
        res.status(404).send("Not enough information to register User");
    }
    const response = yield (0, user_service_1.registerUser)(user.name, user.age, user.weight, user.height);
    if (!response) {
        res.status(404).send("Failed to register a user!");
    }
    res.status(200).json(response);
});
exports.register = register;
