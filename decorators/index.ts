import { log } from "./types/method";

class TestDecorator {
  @log
  showMessage(title: string): string {
    // throw new Error("Error");
    return title;
  }
}

new TestDecorator().showMessage("Hello");
