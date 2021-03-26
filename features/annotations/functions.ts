const add = (a : number, b : number) => {
    return a + b;
};



function subtract (a : number ,b : number) : number {
    return a- b;
}
function divide(a : number ,b : number) : number {
    return a/b;
}


function multiply(a : number ,b : number) : number {
    return a * b;
}

const logger = (message: string ) : void => {
    console.log(message)
}


const throwError = (message : string ) : void => {
     throw new Error(message);
}


const forecast = {
    data : new Date(),
    weather: "Sunny"
}

const logWeather = ({date, weather}: {date : Date, weather: string}) : void => {
    console.log(date);
    console.log(weather);
}
// // ES2015
// const logWeather2 = ({date, weather} : {date: Date, weather: string}) =>{
//     console.log(date);
//     console.log(weather);
// }
// logWeather(forecast)