class Person {
    constructor(id, name, city) {
        this.id = id;
        this.name = name;
        this.city = city;
    }
    getDetails() {
        return `${this.name}, ${this.getSpecificDetails()}`;
    }
}
class Employee extends Person {
    constructor(id, name, dept, city) {
        super(id, name, city);
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.city = city;
    }
    getSpecificDetails() {
        return `works in ${this.dept}`;
    }
    writeDept() {
        console.log(`${this.name} works in ${this.dept}`);
    }
}
let salesEmployee = new Employee("1", "User1", "Sales", "Paris");
let data = [
    new Person("bsmith", "Bob Smith", "London"),
    new Employee("1", "User1", "Sales", "Paris")
];
data.forEach(item => {
    if (item instanceof Employee) {
        item.writeDept();
    }
    else {
        console.log(`${item.id} ${item.name} ${item.city}`);
    }
});
