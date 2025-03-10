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
console.log('arr1 vs arr2', arr1 == arr2)
console.log('arr1 vs arr3', arr1 == arr3)
console.log('arr1 --->', arr1)
console.log('arr3 --->', arr3)

arr3[0] = 9999999

console.log('arr3 --->', arr3)
console.log('arr1 --->', arr1)




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
console.log('comparaciones 5<6 --> ', 5 < 6) //true
console.log('comparaciones 5<5 --> ', 5 < 5) // false
console.log('comparaciones 5<=5 --> ', 5 <= 5) // true
console.log('comparaciones 5>=5 --> ', 5 >= 5) // true
console.log('comparaciones 5>6 --> ', 5 > 6) //false
console.log('AND', 5 < 6 && 5 != 5) // false
console.log('AND', 5 < 6 && 5 != 4) // true
console.log('OR', 5 < 6 || 5 != 5) // true
console.log('OR', 5 < 6 || 5 != 5) // true



//condicionales
/*
if
else
*/

let myAge = 14

// condicion --> devuelve true / false
if (myAge >= 21) {
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


if (myAge > 15) {
  console.log('puedes manejar en USA')
  if (myAge > 20) {
    console.log('puedes beber')
  }
} else {
  console.log('que haces illo?')
}

myAge = 18
if (myAge > 20) {
  console.log('if else if else puedes beber')
}
else if (myAge > 15) {
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

trabajo con arrays
loops
trabajo con objetos
funciones

*/
//            0
const arra = [4, 5, 8, 7, 5, 9, 8, 6, 2, 5, 7, 4, 89, 6, 2, 5, 2, 5646, 87, 321, 8967, 321, 984651]

console.log(arra)
console.table(arra)
console.log('length ->', arra.length)

console.log(arra[12]);
console.log(arra[arra.length - 1])

arra[0] = 5555555
console.log(arra)

arra.push(8888)
console.log(arra)
arra.pop()
console.log(arra)
arra.shift()
console.log(arra)
arra.unshift(333333333)
console.log(arra)
console.table(arra)
const newArr = arra.slice(5, 8)
console.table(newArr)

const newArra = arra.slice(5, -2)
console.table(newArra)

/****************************************************
* 
* //splice() modifica el array, usar toSpliced() que genera un array nuevo
*
*******************************************************/

//newArra.splice(6, 2) // elimina desde la posicion 6 dos posiciones
//newArra.splice(6, 2, 'pepe') // elimina desde la posicion 6 dos posiciones y añade pepe
console.table(newArra)
const splicedArra = newArra.toSpliced(6, 2, 'pepe', 'lola', 'barbara', 'matia')
console.table(splicedArra)
newArr.unshift(1)
newArr.unshift(5)
console.table('---------------------', newArr)
//const isLargeNumber = (element) => element > 6;

console.log('find', newArr.findIndex((element) => element > 6))

console.log(newArr.filter((element) => element > 6))
const newArrDos = [...newArr] // se crea un nuevo array, nuevo espacio de memoria 
const newArrTres = newArr // comparten mismo espacio de memoria ambas constantes
console.log(newArr, newArrDos)
console.log(newArr === newArrDos) // false
console.log(newArr === newArrTres) // true

newArrTres[0] = 7777777777777777
newArrDos[0] = 444444444444
console.log('newArr--> ', newArr, 'newArrDos-->', newArrDos)



// Loops

// ciclos, iteraciones

const arraParaLoops = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log('alrgo arraParaLoops ', arraParaLoops.length)

for (let i = 0; i < arraParaLoops.length; i++) {
  console.log('indice ---> ', i)
  console.log('valor ---> ', arraParaLoops[i]);
}

for (let el of arraParaLoops) {
  console.log('for of', el);
}

for (let i in arraParaLoops) {
  console.log('for in', i);
  console.log('valor ---> ', arraParaLoops[i]);
  if (i % 2 == 0) console.log('for in pares val ---> ', arraParaLoops[i], 'for in i ---> ', i)
}

arraParaLoops.forEach((el, i) =>
  console.log('forEach val ---> ', el, 'forEach i ---> ', i))


let total = 0
arraParaLoops.forEach((el) => total = total + el)
console.log('total ---> ', total)

const totalDos = arraParaLoops.reduce((a, b) => a + b)
console.log(totalDos);


if (arraParaLoops) console.log('tiene info')


arraParaLoops.forEach((el, i) => {
  if (i % 2 == 0) console.log('forEach  pares val ---> ', el, 'forEach i ---> ', i)
}
)


const arraOfAges = [5, 15, 47, 52, 35, 7, 9, 40, 35]

// ejemplo-------
// cuantos pueden beber?

let siPueden = 0

for (let val of arraOfAges) {
  //console.log('valores de arraOfAges', val)
  if (val > 20) {
    siPueden += 1
  }
}
console.log('De ' + arraOfAges.length + ' pueden beber ' + siPueden);
console.log(`De ${arraOfAges.length} pueden beber ${siPueden}`)




// OBJETOS

const camion = {
  marca: 'ford',
  motor: 'v12'
}

console.log(camion)
console.log(camion.marca)
console.log(camion['motor'])
console.log(camion.año)
camion.año = 2020
console.log(camion)
camion.motor = 'v8'
console.log(camion)
camion.velociddas = 5
console.log(camion)
delete camion.velociddas
console.log(camion)


const objExample = {
  edad: 25,
  enfermo: false,
  nombre: 'Pepe',
  fechaDeTranfusion: ['1/1/2025', '5/1/2025'],
  analitica: {
    globulosRojos: 55,
    globulosBlancos: 85,
    plaquetas: 25
  },
  conacto: {
    nombre: 'Lola',
    parentezco: 'Esposa',
    telefono: '+34 666 666 699',
    horariosPreferidos: {
      mañana: false,
      tarde: '13:00 - 16:00',
      noche: false
    }
  }
}

console.log(objExample)
console.log(objExample.analitica.globulosBlancos)
console.log(objExample.fechaDeTranfusion[1])


const newCamion = { ...camion } // creamos nueva copia en otro espacio de memoria


const arrDePropiedadesDelObjeto = ['edad', 'nombre', 'ciudad', 'pais']

const newPerson = {}
console.log('objeto antes del loop ----> ', newPerson)
for (let val of arrDePropiedadesDelObjeto) {
  console.log('objeto dentro del loop antes ----> ', newPerson)
  newPerson.val = val
  console.log('objeto dentro del loop despues ----> ', newPerson)
  newPerson[val] = val
}
console.log(newPerson)


// funciones

/*

funcion clasica:
-------definicion-------
function nombreDeFuncion () {
    //bloque de codigo
  return
    //retorno de funcion
}

nombreDeFuncion() // ejecucion
-----definicion----
const arrowFunction = () => {
    //bloque de codigo
  return
    //retorno de funcion
  }

  arrowFunction() // ejecucion
*/

/*
console.log en funciones:

se pone O dentro de la funcion O fuera de la funcion

lo que se muestra por consola es el RETURN

*/


const sumV1 = () => {
  let total = 4 + 4
  // console.log(total)
  return total
}


const sumaPorSiMismo = (num) => {
  console.log('num es ', num)
  let total = num + num
  return total
}

const sumaDeDosNumeros = (num1, num2) => {
  console.log('num1 = ', num1, 'num2 = ', num2)
  let total = num1 + num2
  return total
}

const sumaDeDosV2 = (num1, num2) => {
  return num1 + num2
}

const sumaDeDosV3 = (num1=0, num2=0) => num1 + num2

console.log(sumV1)
console.log(sumV1())
console.log(sumaPorSiMismo(120));
console.log(sumaDeDosNumeros(5, 7))

console.log(sumaDeDosV2(5, 9))

console.log(sumaDeDosV3(5, 10))
console.log('con valores por defecto en los parametros', sumaDeDosV3(5))




const sentenceMaker = (edad='mayor de edad', nombre, ciudad) => `se llama ${nombre} y tiene ${edad} años y vive en ${ciudad}`
console.log(sentenceMaker(18, 'pepe', 'sevilla'))
const pepe = {
  nombre: 'pepe',
  
  ciudad: 'Madrid'
}
console.log(sentenceMaker(pepe.edad, pepe.nombre, pepe.ciudad))


//desestructuracion
const sentenceMakerV2 = ({edad='mayor de edad', nombre, coche}) => `se llama ${nombre} y tiene ${edad} años y ${coche? ' tiene coche' : ' es ecologista'} `

console.log(sentenceMakerV2(pepe))


const ejemplo = (arr) => {
// cuantos pueden beber?
console.log(arr)
let siPueden = 0

for (let val of arr) {
  if (val > 20) {
    siPueden += 1
  }
}
return siPueden
}

console.log(ejemplo(arraOfAges))
console.log(ejemplo([5,7,89,54,32,5,58,4,7,54,201]))

const testObj = {}
const obj2 = {}



const objMod = (obj, key, value, del=false) => {
  if (del) {
    return delete obj[key]
  }
  obj[key] = value
  return true
}

console.log(testObj);

console.log(objMod(testObj, 'movil', 'samsung'))

console.log(objMod(testObj, 'operador', 'vodafone'))
console.log(testObj);

console.log(objMod(obj2, 'operador', 'vodafone'))
console.log(obj2);

console.log(objMod(testObj, 'operador', '', true))
console.log(testObj);