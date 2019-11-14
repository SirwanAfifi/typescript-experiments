class Vehicle {
  drive(): void {
    console.log("Vehicle");
  }

  honk(): void {
    console.log("Beep");
  }
}

class Car extends Vehicle {
  drive(): void {
    super.drive();
    console.log(">...");
  }
}

const car = new Car();
