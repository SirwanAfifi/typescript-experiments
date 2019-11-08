function calculateTax(amount: number, format: boolean): number | string {
  return amount * 1.2;
}

let product: [string, number] = ["P1", 100];
let person: [string, number] = ["Sirwan Afifi", 30];

console.log(product[0], product[1]);
console.log(person[0], person[1]);

product.forEach((j: string | number) => {
  if (typeof j === "string") {
    console.log(`String: ${j}`);
  } else {
    console.log(`Number: ${j.toFixed(2)}`);
  }
});

let products: [string, number][] = [["P1", 1000], ["P2", 200000]];
let tupleUnion: ([string, number] | boolean)[] = [
  true,
  false,
  product,
  person,
  ...products
];

tupleUnion.forEach((elem: [string, number] | boolean) => {
  if (elem instanceof Array) {
    elem.forEach((tupleElem: string | number) => {
      if (typeof tupleElem === "string") {
        console.log(`String Value: ${tupleElem}`);
      } else {
        console.log(`Number Value: ${tupleElem}`);
      }
    });
  } else if (typeof elem === "boolean") {
    console.log(`Boolean Value: ${elem}`);
  }
});
