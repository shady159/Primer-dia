// * var
// * let
// * const

//* var: es una palabra reservada que nos permite declarar variables en javascript
var n1 = 1; // Number
n1 = "hola"; // String
var n2 = 10; // Number

//! var ya no se usa
// var es global
// var es reasignable
// var es pesado
var n1 = true;

// Actualmente no es recomendable usar var

//* let: es una palabra reservada que nos permite declarar variables en javascript
// let solo funciona en el scope donde fue declarada
let nombre = "Linder"; // el valor incial

nombre = 10; // cambiando el valor
nombre = false; // cambiando el valor

// Una nueva variable
let nombre2 = "Juan";

console.log("Hola esta es una variable");
// true = 1
// false = 0
console.log(n1 + nombre);
console.log(nombre);

//* const: es una palabra reservada que nos permite declarar variables en javascript
// const solo funciona en el scope donde fue declarada
// const no se puede reasignar
const nombre3 = "Linder";
// Esto no es posible con const porque una ves tenga este un valor ya no se puede cambiar
// A esto se le llama //! inmutabilidad
// nombre3 = "Pepe";




// Sintaxys: La forma en la que escribimos escribimos el codigo

// function sumar() {

//}
let n3 = 30;

function sumar() {
  // codigo
  let n1 = 10;
  let n2 = 20;
  console.log(n1 + n2 + n3);
}

let n4 = 40;

console.log(n1);
console.log(n3);

let nombre = "Pepe";

// Recomendacion: Los nombres de la funciones deben ser verbos
function restar(n1, n2) {
  console.log(n1 - n2);
}

// Significa que cuando tengamos que llamar la funcion esta recibe 2 argumentos
// que son n1, n2
//llamar la funcion hace referencia a usar, porque una funcion cuando es
// creado solo se ejecutada cada que la llamemos

// Para usar la funcion solo debemos escribir el nombre de esta
restar(10, 50); // -40
restar(90, 100); // -10
restar(120, 30); // 90

function saludar(nombre) {
  console.log("Hola me llamo " + nombre); //
}

saludar("Pepe");
saludar("Juan");