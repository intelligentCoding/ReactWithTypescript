class Vehicle {
    // color : string = 'red';
    constructor( public color : string) {}
    protected honk() : void {
        console.log("Beep")
    }
}

const vehicle  = new Vehicle('orange');
console.log(vehicle.color)

class Cars  extends Vehicle{
    constructor(public wheels : number, color : string){
        super(color);
    }
    private drive() : void {
        console.log("Not Driving away the car")
    }

    startDriving() : void {
        this.drive();
        this.honk();
    }
}

// const vehicle  = new Vehicle();
// vehicle.drive();
// vehicle.honk();

const cars = new Cars(4,'red');
//drive() is over ridden
cars.startDriving();
// cars.honk();


