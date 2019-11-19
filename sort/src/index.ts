import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharacterCollection } from "./CharactersCollection";

// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

const characterCollection = new CharacterCollection("Xaayb");
const sorter = new Sorter(characterCollection);
sorter.sort();
console.log(characterCollection.data);
