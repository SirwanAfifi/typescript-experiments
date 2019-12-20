import { log } from "./types/method";
import { logProp } from "./types/property";

class TestDecorator {
  @log
  showMessage(title: string): string {
    // throw new Error("Error");
    return title;
  }

  @logProp
  name: string = "Sirwan";
}

new TestDecorator().showMessage("Hello");
