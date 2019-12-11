import { User } from "./models/User";

const collection = User.buildUserCollection();

collection.fetch();

collection.on("change", () => {
  console.log(collection);
});
