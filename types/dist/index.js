"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
let people = [
    new dataTypes_1.Person("Sirwan Afifi", "Paris"),
    new dataTypes_1.Person("Behzad", "Sanandaj")
];
let products = [new dataTypes_1.Product("Running Shoes", 100), new dataTypes_1.Product("Hat", 25)];
let cities = [new dataTypes_1.City("Sanandaj", 8136000), new dataTypes_1.City("Paris", 2141000)];
[...people, ...products].forEach(item => console.log(`Item: ${item.name}`));
class DataCollection {
    constructor(initialData) {
        this.items = [];
        this.items.push(...initialData);
    }
    collate(targetData, itemProp, targetProp) {
        let results = [];
        this.items.forEach(item => {
            let match = targetData.find(d => d[targetProp] === item[itemProp]);
            if (match !== undefined) {
                results.push({ ...match, ...item });
            }
        });
        return results;
    }
}
const peopleData = new DataCollection(people);
let collatedData = peopleData.collate(cities, "city", "name");
collatedData.forEach(c => console.log(`${c.name}, ${c.city}, ${c.population}`));
