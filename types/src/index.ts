class Person {
  constructor(public id: string, public name: string, public city: string) {}
}

class Employee extends Person {
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

let data: (Person | Employee)[] = [
  { id: "bsmith", name: "Bob Smith", city: "London" },
  { id: "ajones", name: "Alice Jones", city: "Paris" },
  { id: "dpeters", name: "Dora Peters", city: "New York" },
  salesEmployee
];

data.forEach(item => {
  if (item instanceof Employee) {
    item.writeDept();
  } else {
    console.log(`${item.id} ${item.name} ${item.city}`);
  }
});
