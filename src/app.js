import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");
};

/*
palabras reservadas:

let 
const
var
if
else
for
in
of
switch
string
number
while
true
false


*/



//variables

/*

var --> X--> no se usa
let --> permite reasignacion de valor
const -->NO permite reasignacion 

*/

//declaracion --> let nombre
//asignacion de valor ---> nombre = 'pepe'
//inicializacion ---> let nombre = 'pepe'
let pepeName = 'pepe'
let lolaName = 'lola'
pepeName = 'Pepisimo'


//variable age le asigno valor de 5
let age = 5
// variable age tiene valor de 6
age = 6


//let/const nombreDeVariable = valor 
const version = 0

// camelCase ---> primera palabra minuscula, resto de palabras con la primera mayuscula
// pepeElMagnifico
// pepelemagnifico

/*
todo aqui dentro sera obviado por js
let text = 'pepe'
texto ---> string ---> "" '' ``
let age = 54
numeros ---> number ---> 1 1.5 -1 5848484852164567
let alive = true
let dead = false
boolean --> true / false --- 1/0 
let myVar = undefined
undefined --> NO ESTA DEFINIDO
let vacio = null
null ---> VACIO
let isANumber = NaN
NaN ---> Not a number --> no es un numero


const myArray = []
array --> [] --> lista desorganizada, necesariamente NO tienen que estar relacionados los datos
empieza en 0 

 0, 1,  2, 3,..... N
[1, 20, 5, 4, 7, 65, 'pepe', 'lola', true, false, false]

const myObj = {}
objeto --> {} --- > pares de datos llave: valor, estan relacionados los datos, 
los datos describen algo
{
  nombre: 'pepe',
  edad: 15,
  ciudad: 'Madrid'
}

{
marca: 'toyota',
modelo: 'corolla',
año: 2021,
estado: 'nuevo',
averias: false
itv: [2022, 2023]
}
*/

const person = {
  name: 'Pepe',
  age: 5,
  city: 'Sevilla'
}

console.log(person)
console.log(person.name)
console.log(person.city)

person.age = 6
console.log(person)

const arr = [1, 2, 3]
console.log(arr)
arr[0] = 10
console.log(arr)

let name1 = 'pepe'
let name2 = name1

name2 = 'lola'

console.log('name1', name1)
console.log('name2', name2)

const arr1 = [1, 2, 3]
const arr3 = arr1
const arr2 = [1, 2, 3]
console.log('arr1 vs arr2', arr1==arr2)
console.log('arr1 vs arr3', arr1==arr3)
console.log('arr1 --->',arr1)
console.log('arr3 --->',arr3)

arr3[0]=9999999

console.log('arr3 --->', arr3)
console.log('arr1 --->',arr1)




/*
operadores logicos --> se resuelven como booleanos --> true/false
 = --> asignacion de valor
 ! --> negacion
 == --> igual a --> compara valores 
 != --> NO ES igual a --> compara valores 
 === --> estrictamente igual a ---> compara valores y tipo de dato
 !==  --> NO ES estrictamente igual a ---> compara valores y tipo de dato

 <
 >
 <=
 >=

 && --> AND --> y --> para que sea true, TODAS las comparaciones se tienen que cumplir
 || --> OR --> o --> para que sea false, todas tienen que NO cumplirse 

*/

console.log('5' == 5) // true
console.log('5' === 5) // false
console.log(5 != '5') //false
console.log(5 !== '5') //true
console.log('comparaciones 5<6 --> ', 5<6) //true
console.log('comparaciones 5<5 --> ', 5<5) // false
console.log('comparaciones 5<=5 --> ', 5<=5) // true
console.log('comparaciones 5>=5 --> ', 5>=5) // true
console.log('comparaciones 5>6 --> ', 5>6) //false
console.log('AND', 5<6 && 5!=5) // false
console.log('AND', 5<6 && 5!=4) // true
console.log('OR', 5<6 || 5!=5) // true
console.log('OR', 5<6 || 5!=5) // true



//condicionales
/*
if
else
*/

let myAge = 14

// condicion --> devuelve true / false
if (myAge>=21) {
  //bloque de codigo que se ejecuta si se cumple condicion
  console.log('codigo descuento para cerveza')
} else {
  // bloque de codigo que se ejecuta si NO se cumple la condicion 
  console.log('dale a tomar zumo');
}


/*
el else no es obligado, solo se usa si NECESITAS SI O SI, que se ejecute algo cuando NO se cumpla la funcion
*/

let test = false
console.log(test)
if (!test) {
  console.log('test  NO existe')
}


if (myAge>15) {
  console.log('puedes manejar en USA')
  if (myAge>20) {
    console.log('puedes beber')
  }
} else {
  console.log('que haces illo?')
}

myAge = 18
if (myAge>20) {
  console.log('if else if else puedes beber')
} 
else if (myAge>15) {
  console.log('if else if else puedes manejar en USA')  
}
else {
  console.log('if else if else que haces illo?')
}

if (test) {
  console.log('valor de test', test)
  console.log('bla bla bla')
}
//si solo se hace UNA isntruccion despues del if, no son necesarias las llaves
if (test) console.log('works!')


// proxima
/*

loops
trabajo con arrays
trabajo con objetos
funciones

*/