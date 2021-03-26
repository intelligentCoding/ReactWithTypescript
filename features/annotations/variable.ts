// : number is our type annotation. 
// const apples: number = true ; //this line wont work since apples are number
let apples: number = 5;

let speed: string = 'fast';

//if we give speed another value it would give us an error
// speed  = true;

let nothingAtAll : null = null;

let undefinedVar : undefined = undefined;

//built in objects

let now: Date = new Date();

//Arrays

let colors: string[] = ['red', 'green', 'blue'];

//Array of numbers

let myNumbers : number[] = [1,2,3];

let truths: boolean [] = [true, true, false];


//classes 

class Car {

}

let car: Car = new Car();


//Object Literal
let point : {x: number; y: number} = {
    x: 10,
    y: 10
}

// function 
//: (i: number) => void ----this is all annotation.
const logNumber : (i: number) => void  = (i : number) => {
    console.log(i);
}


//WHen to use Annotations
// 1) when have a function returning 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
// This wont give any error since typescript doesn't know the type 
// coordinates.asdfkasdjfas; 

// let's fix that 

const json2 = '{"x": 10, "y": 20}';

const coordinates2 : { x: number; y: number } = JSON.parse(json2);

//Following will give an error now
// coordinates2.asdfasfsa;


// 2) When we declare a variable on one line and initalizate it later

let words = ['red', 'green', 'blue'];

let foundWord: boolean;

for (let i = 0; i < words.length; i++){
    if(words[i] === 'green'){
        foundWord = true;
    }
}

//3) variable whose type can not be inferred correctly

let numbers = [-10, -1, 12];

let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++){
    if(numbers[i] > 0){
        // code below will give us an error
        numberAboveZero = numbers[i]; 
    }
}

