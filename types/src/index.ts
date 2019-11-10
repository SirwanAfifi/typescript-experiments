interface Human {}

abstract class Person {
  constructor(public id: string, public name: string, public city: string) {}

  getDetails(): string {
    return `${this.name}, ${this.getSpecificDetails()}`;
  }

  abstract getSpecificDetails(): string;
}

class Employee extends Person implements Human {
  getSpecificDetails() {
    return `works in ${this.dept}`;
  }
  constructor(
    public readonly id: string,
    public name: string,
    public dept: string,
    public city: string
  ) {
    super(id, name, city);
  }

  writeDept() {
    console.log(`${this.name} works in ${this.dept}`);
  }
}

let salesEmployee = new Employee("1", "User1", "Sales", "Paris");

let data = [
  new Employee("1", "bsmith", "Bob Smith", "London"),
  new Employee("1", "User1", "Sales", "Paris")
];

data.forEach(item => {
  item.getSpecificDetails();
});
