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
