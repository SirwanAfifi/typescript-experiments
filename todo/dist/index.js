"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const inquirer = require("inquirer");
const jsonTodoCollection_1 = require("./jsonTodoCollection");
let todos = [
    new todoItem_1.TodoItem(1, "Buy Flowers"),
    new todoItem_1.TodoItem(2, "Get Shoes"),
    new todoItem_1.TodoItem(3, "Collect Tickets"),
    new todoItem_1.TodoItem(4, "Call Joe", true)
];
let collection = new jsonTodoCollection_1.JsonTodoCollection("Sirwan", todos);
let showComplete = true;
function displayTodoList() {
    console.log(`${collection.userName}'s Todo List ` +
        `(${collection.getItemCounts().incomplete} items to do)`);
    collection.getTodoItems(showComplete).forEach(item => item.printDetails());
}
var Commands;
(function (Commands) {
    Commands["Add"] = "Add New Task";
    Commands["Complete"] = "Complete Task";
    Commands["Toggle"] = "Show/Hide Complete";
    Commands["Purge"] = "Remove Completed Tasks";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
function propmptAdd() {
    console.clear();
    inquirer
        .prompt({ type: "input", name: "add", message: "Enter task:" })
        .then(answers => {
        if (answers["add"] !== "") {
            collection.addTodo(answers["add"]);
        }
        promptUser();
    });
}
function promptComplete() {
    console.clear();
    inquirer
        .prompt({
        type: "checkbox",
        name: "complete",
        message: "Mark Tasks Compelte",
        choices: collection.getTodoItems(showComplete).map(item => ({
            name: item.task,
            value: item.id,
            checked: item.complete
        }))
    })
        .then(answers => {
        let completedTasks = answers["complete"];
        collection
            .getTodoItems(true)
            .forEach(item => collection.markComplete(item.id, completedTasks.find(id => id === item.id) !== undefined));
        promptUser();
    });
}
function promptUser() {
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
            case Commands.Add:
                propmptAdd();
                break;
            case Commands.Complete:
                if (collection.getItemCounts().incomplete > 0) {
                    promptComplete();
                }
                else {
                    promptUser();
                }
                break;
            case Commands.Purge:
                collection.removeComplete();
                promptUser();
                break;
        }
    });
}
promptUser();
