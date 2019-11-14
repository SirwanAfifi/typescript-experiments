const drink = {
  color: "brown",
  carbonated: true,
  suager: 40
};

type Drink = [string, boolean, number];
const pepsi: Drink = ["brown", true, 40];
// pepsi[0] = 40; Not allowed
pepsi[0] = "blue";
