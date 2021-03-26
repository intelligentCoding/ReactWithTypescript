const carMakers2 : string[] = [];
const carMakers = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

const carsByMake = [
    ['f150'],
    ['corola'],
    ['camearo']
]

const carsByMake2 : string[][] = [];


//Help with inference when extracting values

const myCar = carMakers[0];
const myCar2 = carMakers.pop();

// prevent incompatible values
// carMakers.push(100)

//Help with 'map'

carMakers.map((car: string) : string => {
    return car.toUpperCase();
});


const importantDates: (Date | string)[] = [new Date()];

importantDates.push('2030-10-10');
importantDates.push(new Date());
// importantDates.push(100); //This will give erros since 'importantDates' only accepts string and date. 

