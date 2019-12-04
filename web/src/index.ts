import { User } from "./models/User";

const user = new User({ id: 1 });

user.set({ name: "Sirwan Afifi", age: 40 });

user.events.on("change", () => {
  console.log("Change!");
});

user.events.trigger("change");
