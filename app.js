//The forecast today is 293 Kelvin//
const kelvin = 0;
/*
Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.
*/
const celsius = kelvin - 273;
/* 
Comverting to Farenheit.
Fahrenheit = Celsius * (9/5) + 32
*/
let farenheit = celsius * (9 / 5) + 32;

/*
converting from decimal to whole number
reassigning the value for farenheit
*/
farenheit = Math.floor(farenheit);

//Log temperature in Farenheit//
console.log(`The temperature is ${farenheit} degrees Farenheit.`);

//converting Celsius to Newton//
let newton = celsius * (33 / 100);

/*
converting from decimal to whole number
reassigning the value for newton
*/
newton = Math.floor(newton);

//Log temperature in Newton//
console.log(`The temperature is ${newton} degrees Newton.`);
