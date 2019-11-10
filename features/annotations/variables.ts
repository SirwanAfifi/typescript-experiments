const apples: number = 5;
let speed: string = "fast";

let nothingMuch: null = null;
let nothing: undefined = undefined;

let now: Date = new Date();

let user: {
  name: string;
  lastName: string;
  skills: string[];
} = {
  name: "Sirwan",
  lastName: "Afifi",
  skills: ["C#", "JavaScript", "React", "Vue"]
};

// Array
let array: Array<number> = [10];
let array2: string[];
let array3: [string, number][] = [["C#", 1]];
let complexArray: [Array<number>, Array<string>][] = [
  [[10, 5, 6, 4], ["Item1", "Item2"]],
  [[10, 5, 6, 4], ["Item1", "Item2"]],
  [[10, 5, 6, 4], ["Item1", "Item2"]]
];

// Class
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function
const logNumbers: (i: number) => void = (i: number) => {
  console.log(i);
};

let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length - 1; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}
console.log(foundWord);
