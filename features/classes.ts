class Vehicle {
    drive() : void {
        console.log("Driving Away")
    }

    honk() : void {
        console.log("Beep")
    }
}

const vehicle  = new Vehicle();
vehicle.drive();
vehicle.honk();