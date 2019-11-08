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
var products = [["P1", 1000], ["P2", 200000]];
var tupleUnion = [
    true,
    false,
    product,
    person
].concat(products);
tupleUnion.forEach(function (elem) {
    if (elem instanceof Array) {
        elem.forEach(function (tupleElem) {
            if (typeof tupleElem === "string") {
                console.log("String Value: " + tupleElem);
            }
            else {
                console.log("Number Value: " + tupleElem);
            }
        });
    }
    else if (typeof elem === "boolean") {
        console.log("Boolean Value: " + elem);
    }
});
