import { log } from "./types/method";
import { logProp } from "./types/property";
import { logParam } from "./types/parameter";

class TestDecorator {
  // @log
  showMessage(@logParam title: string): string {
    // throw new Error("Error");
    return title;
  }

  // @logProp
  name: string = "Sirwan";
}

new TestDecorator().showMessage("Hello");
