"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum(...vals) {
    return vals.reduce((total, val) => (total += val));
}
exports.sum = sum;
