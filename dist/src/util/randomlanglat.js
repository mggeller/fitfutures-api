"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomInRange = void 0;
const getRandomInRange = (from, to, fixed) => {
    return Number((Math.random() * (to - from) + from).toFixed(fixed));
};
exports.getRandomInRange = getRandomInRange;
