function calculateTax(amount, format) {
    return amount * 1.2;
}
var product = ["P1", 100];
var person = ["Sirwan Afifi", 30];
console.log(product[0], product[1]);
console.log(person[0], person[1]);
product.forEach(function (j) {
    if (typeof j === "string") {
        console.log("String: " + j);
    }
    else {
        console.log("Number: " + j.toFixed(2));
    }
});
