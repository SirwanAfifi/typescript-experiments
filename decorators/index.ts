import { log } from "./types/method";
import { logProp } from "./types/property";
import { logParam } from "./types/parameter";
import { logClass } from "./types/class";

@logClass
class TestDecorator {
  @log
  showMessage(@logParam title: string): string {
    // throw new Error("Error");
    return title;
  }

  @logProp
  name: string = "Sirwan";
}

new TestDecorator().showMessage("Hello");
