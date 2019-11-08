var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function correlateData(peopleData, staff) {
    var defaults = { company: "None", dept: "None" };
    return peopleData.map(function (p) { return (__assign({}, p, (staff.find(function (e) { return e.id === p.id; }) || __assign({}, defaults, { id: p.id })))); });
}
var people = [
    { id: "bsmith", name: "Bob Smith", city: "London" },
    { id: "ajones", name: "Alice Jones", city: "Paris" },
    { id: "dpeters", name: "Dora Peters", city: "New York" }
];
var employees = [
    { id: "bsmith", company: "Acme Co", dept: "Sales" },
    { id: "dpeters", company: "Acme Co", dept: "Development" }
];
var dataItems = correlateData(people, employees);
dataItems.forEach(function (item) {
    console.log("Person: " + item.id + ", " + item.name + ", " + item.city);
    console.log("Employee: " + item.id + ", " + item.company + ", " + item.dept);
});
