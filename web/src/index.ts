import { User } from "./models/User";

const user = new User({ id: 1 });

var id = user.attributes.get("id");

user.events.on("change", () => {
  console.log("Change!");
});

user.events.trigger("change");
