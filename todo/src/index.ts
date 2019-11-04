import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";
import * as inquirer from "inquirer";

let todos = [
  new TodoItem(1, "Buy Flowers"),
  new TodoItem(2, "Get Shoes"),
  new TodoItem(3, "Collect Tickets"),
  new TodoItem(4, "Call Joe", true)
];

let collection = new TodoCollection("Sirwan", todos);
let showComplete = true;

function displayTodoList(): void {
  console.log(
    `${collection.userName}'s Todo List ` +
      `(${collection.getItemCounts().incomplete} items to do)`
  );
  collection.getTodoItems(showComplete).forEach(item => item.printDetails());
}

enum Commands {
  Toggle = "Show/Hide Complete",
  Quit = "Quit"
}

function promptUser(): void {
  console.clear();
  displayTodoList();
  inquirer
    .prompt({
      type: "list",
      name: "command",
      message: "Choose option",
      choices: Object.values(Commands)
    })
    .then(answers => {
      switch (answers["command"]) {
        case Commands.Toggle:
          showComplete = !showComplete;
          promptUser();
          break;
      }
    });
}

promptUser();
