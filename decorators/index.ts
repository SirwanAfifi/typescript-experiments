import { log } from "./types/method";
import { logProp } from "./types/property";
import { logParam } from "./types/parameter";
import { logClass } from "./types/class";
import { APIServer } from "./types/factory";

const api = new APIServer(["home", "about"]);
for (let m in api) {
  console.log(m);
}
