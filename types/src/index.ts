import { Person, Product, City } from "./dataTypes";

let people = [
  new Person("Sirwan Afifi", "Paris"),
  new Person("Behzad", "Sanandaj")
];
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
let cities = [new City("Sanandaj", 8136000), new City("Paris", 2141000)];
[...people, ...products].forEach(item => console.log(`Item: ${item.name}`));

class DataCollection<T extends { name: string }, U> {
  private items: T[] = [];

  constructor(initialData: T[]) {
    this.items.push(...initialData);
  }

  collate(targetData: U[], itemProp: string, targetProp: string): (T & U)[] {
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

const peopleData = new DataCollection<Person, City>(people);
let collatedData = peopleData.collate(cities, "city", "name");
collatedData.forEach(c => console.log(`${c.name}, ${c.city}, ${c.population}`));
