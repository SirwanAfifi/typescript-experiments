import { User, UserProps } from "./models/User";
import { Collection } from "./models/Collection";

const collection = new Collection<User, UserProps>(
  "http://localhost:3000/users",
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

collection.fetch();

collection.on("change", () => {
  console.log(collection);
});
