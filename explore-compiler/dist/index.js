"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calc_1 = require("./calc");
function printMessage(msg) {
    console.log(`Message: ${msg}`);
}
printMessage("Hello, TypeScript");
let total = calc_1.sum(100, 200, 300);
console.log(`Total: ${total}`);
