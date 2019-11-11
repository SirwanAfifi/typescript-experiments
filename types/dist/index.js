"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
let products = [new dataTypes_1.Product("Shoes", 100), new dataTypes_1.Product("Hat", 25)];
class Collection {
    constructor(initialItems = []) {
        this.items = new Map();
        this.add(...initialItems);
    }
    add(...newItems) {
        newItems.forEach(newItem => this.items.set(newItem.name, newItem));
    }
    get(name) {
        return [...this.items.values()].find(item => item.name === name);
    }
    get count() {
        return this.items.size;
    }
    values() {
        return this.items.values();
    }
    [Symbol.iterator]() {
        return this.items.values();
    }
}
let productCollection = new Collection(products);
console.log(`There are ${productCollection.count} products`);
[...productCollection].forEach(p => console.log(`Products: ${p.name}, ${p.price}`));
let p = productCollection.get("Hat");
console.log(`Product: ${p.name}, ${p.price}`);
function getValue(item, keyname) {
    console.log(`Value: ${item[keyname]}`);
}
let p1 = new dataTypes_1.Product("Running Shoes", 100);
getValue(p1, "name");
let p2 = { name: "Kayak", price: 275 };
console.log(`Mapped type: ${p2.name}, ${p2.price}`);
