var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(id, name, city) {
        this.id = id;
        this.name = name;
        this.city = city;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, dept, city) {
        var _this = _super.call(this, id, name, city) || this;
        _this.id = id;
        _this.name = name;
        _this.dept = dept;
        _this.city = city;
        return _this;
    }
    Employee.prototype.writeDept = function () {
        console.log(this.name + " works in " + this.dept);
    };
    return Employee;
}(Person));
var salesEmployee = new Employee("1", "User1", "Sales", "Paris");
var data = [
    new Person("bsmith", "Bob Smith", "London"),
    { id: "ajones", name: "Alice Jones", city: "Paris" },
    { id: "dpeters", name: "Dora Peters", city: "New York" },
    salesEmployee
];
data.forEach(function (item) {
    if (item instanceof Employee) {
        item.writeDept();
    }
    else {
        console.log(item.id + " " + item.name + " " + item.city);
    }
});
