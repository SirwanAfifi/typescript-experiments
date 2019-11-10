"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
let people = [
    new dataTypes_1.Person("Sirwan Afifi", "Sanandaj"),
    new dataTypes_1.Person("Behzad", "Sanandaj")
];
let products = [new dataTypes_1.Product("Running Shoes", 100), new dataTypes_1.Product("Hat", 25)];
[...people, ...products].forEach(item => console.log(`Item: ${item.name}`));
class DataCollection {
    constructor(initialiItems) {
        this.items = [];
        this.items.push(...initialiItems);
    }
    add(newItem) {
        this.items.push(newItem);
    }
    getNames() {
        return this.items.map(item => item.name);
    }
    getItem(index) {
        return this.items[index];
    }
}
let peopleData = new DataCollection(people);
let firstPerson = peopleData.getItem(0);
console.log(`First Person: ${firstPerson.name}, ${firstPerson.city}`);
