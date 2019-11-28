import { User } from "./models/User";

const user = new User({ name: "Sirwan", age: 30 });

user.set({
  name: "Kaywan",
  age: 29
});

console.log(user.get("name"));
console.log(user.get("age"));
