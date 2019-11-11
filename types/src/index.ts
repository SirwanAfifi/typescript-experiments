import { Person, Product, City } from "./dataTypes";

let products = [new Product("Shoes", 100), new Product("Hat", 25)];

type shapeType = {
  name: string;
};

class Collection<T extends shapeType> {
  private items: Set<T>;
  constructor(initialItems: T[] = []) {
    this.items = new Set<T>(initialItems);
  }

  add(...newItems: T[]): void {
    newItems.forEach(newItem => this.items.add(newItem));
  }

  get(name: string): T {
    return [...this.items.values()].find(item => item.name === name);
  }

  get count(): number {
    return this.items.size;
  }
}

let productCollection: Collection<Product> = new Collection(products);
console.log(`There are ${productCollection.count} products`);
let p = productCollection.get("Hat");
console.log(`Product: ${p.name}, ${p.price}`);
