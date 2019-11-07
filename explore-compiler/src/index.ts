import { sum } from "./calc";

function printMessage(msg: string): void {
  console.log(`Message: ${msg}`);
}

printMessage("Hello, TypeScript");

let total = sum(100, 200, 300);
console.log(`Total: ${total}`);
