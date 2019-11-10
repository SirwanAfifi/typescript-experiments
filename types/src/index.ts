import { Person, Product } from "./dataTypes";

let people = [
  new Person("Sirwan Afifi", "Sanandaj"),
  new Person("Behzad", "Sanandaj")
];
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];

[...people, ...products].forEach(item => console.log(`Item: ${item.name}`));

class DataCollection<T extends Person | Product> {
  private items: T[] = [];

  constructor(initialiItems: T[]) {
    this.items.push(...initialiItems);
  }

  add(newItem: T) {
    this.items.push(newItem);
  }

  getNames(): string[] {
    return this.items.map(item => item.name);
  }

  getItem(index: number) {
    return this.items[index];
  }
}

let peopleData = new DataCollection<Person>(people);
let firstPerson = peopleData.getItem(0);
console.log(`First Person: ${firstPerson.name}, ${firstPerson.city}`);
