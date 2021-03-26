const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

// const pepsi : [string, boolean, number] = ['brown', true, 40];

//now using type Alias
type Drink = [string, boolean, number];

const pepsi : Drink = ['brown', true, 40];
const sprite : Drink = ['clear', true, 40];


const carSpecs : [number, number]= [400, 3354];

const carSpecs2 = {
    horsePower: 400, 
    weight: 3354
}