interface Vehicle {
    name: string;
    // year: number;
    year: Date;
    broken: boolean;
    summary(): string;
}
const oldHonda = {
    name: 'civic',
    // year: 2000,
    year: new Date(),
    broken: true,
    summary() : string{
        return `Name : ${this.name}`
    }
};

// const printVehicle = (vehicle : { name: string; year: number;broken: boolean}) : void => {
const printVehicle = (vehicle : Vehicle) : void => {
    console.log(`Name : ${vehicle.name}`);
    console.log(`Year : ${vehicle.year}`);
    console.log(`Broken : ${vehicle.broken}`);
};


printVehicle(oldHonda)