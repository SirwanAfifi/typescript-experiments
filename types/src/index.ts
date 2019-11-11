import { Person, Product, City } from "./dataTypes";

let products = [new Product("Shoes", 100), new Product("Hat", 25)];

type shapeType = {
  name: string;
};

class Collection<T extends shapeType> implements Iterable<T> {
  private items: Map<string, T>;
  constructor(initialItems: T[] = []) {
    this.items = new Map<string, T>();
    this.add(...initialItems);
  }

  add(...newItems: T[]): void {
    newItems.forEach(newItem => this.items.set(newItem.name, newItem));
  }

  get(name: string): T {
    return [...this.items.values()].find(item => item.name === name);
  }

  get count(): number {
    return this.items.size;
  }

  values(): IterableIterator<T> {
    return this.items.values();
  }

  [Symbol.iterator](): Iterator<T> {
    return this.items.values();
  }
}

let productCollection: Collection<Product> = new Collection(products);
console.log(`There are ${productCollection.count} products`);

[...productCollection].forEach(p =>
  console.log(`Products: ${p.name}, ${p.price}`)
);

let p = productCollection.get("Hat");
console.log(`Product: ${p.name}, ${p.price}`);

function getValue<T, K extends keyof T>(item: T, keyname: K) {
  console.log(`Value: ${item[keyname]}`);
}

let p1 = new Product("Running Shoes", 100);
getValue(p1, "name");
