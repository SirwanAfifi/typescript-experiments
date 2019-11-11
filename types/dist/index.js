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
