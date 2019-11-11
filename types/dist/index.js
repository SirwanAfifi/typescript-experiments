"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
let products = [new dataTypes_1.Product("Shoes", 100), new dataTypes_1.Product("Hat", 25)];
class Collection {
    constructor(initialItems = []) {
        this.items = new Set(initialItems);
    }
    add(...newItems) {
        newItems.forEach(newItem => this.items.add(newItem));
    }
    get(name) {
        return [...this.items.values()].find(item => item.name === name);
    }
    get count() {
        return this.items.size;
    }
}
let productCollection = new Collection(products);
console.log(`There are ${productCollection.count} products`);
let p = productCollection.get("Hat");
console.log(`Product: ${p.name}, ${p.price}`);
