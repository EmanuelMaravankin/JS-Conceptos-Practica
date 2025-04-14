// Para ejecutar en la terminal es : NODE "Nombre del file" (ver bien donde estoy parado)

// 3 tipos de variables

//var - No es recomendable porque es reasignable y redeclarable
var nombre = "Matias"
var nombre = "Juan"

//console.log("Nombre ", nombre)

//let - Puede reasignarse, pero no redeclararse
let edad = 28
edad = 30 // Se reasigna

//const - No se puede reasignar ni redeclarar
const apellido = "Duro"
// apellido = "Perez" - no se puede reasignar

/* let variable = "Hola"

console.log("Variable: " , variable)
variable = 29
console.log("Variable: " , variable) */

/* ------------ VALORES ------------------ */

/* typeof muestra el formato del texto
let texto = "Hola Clase"
console.log("Texto: ", typeof texto); - String
let numeroEntero = 42;
console.log("numeroEntero: ", typeof numeroEntero); - Number 
let array = [1, 2, "strings", [5, 6], true, false, {}]
console.log("array: ", typeof array); - objetc */


//------------- OBJETOS --------------------

/* let saludo = function(){
    return "Saludo"
}
let materias = ["PNT2", "TP2"]
let nombre = "Matias"


const familia = {
    padre:{
        nombre: 'pepe',
        edad: 65,
    },
    madre: "Laura"
}

const usuario = {
    nombre: nombre,
    materias,
    edad: 30,
    activo: true,
    hablar: function(){
        let mensaje = "Hola"

        return mensaje
    },
    saludo: saludo,
    familia,
    aprobadas: null
}


console.log(usuario);

usuario.aprobadas = 5

console.log(usuario); */

// ------------ Arrays ---------------------

/* let frutos = ["Banana","Manzana","Frutilla"]

console.log(frutos) */

// METODOS DE ARRAYS

// PUSH - agrega un elemento al final del array

/* frutos.push("Uva")
console.log(frutos)

// POP - elimina el ultimo elemento del array

frutos.pop()
console.log(frutos)

// UNSHIFT - agregar un elemento al comienzo del array

frutos.unshift("Mango")
console.log(frutos);

// SHIFT - elimina el primer elemento del array
frutos.shift()
console.log(frutos); */

let numeros = [1,2,3,4,5,6,7,8,9,10]
//console.log("Numeros : ", numeros);

// Transforma cada elemento del array, y devuelve uno nuevo, segun la funcion
let nuevoArray = numeros.map(num => num * num)
//console.log(nuevoArray);

//Filtra los elementos 1 por 1 segun la condicion y devuelve un nuevo array
let mayores = numeros.filter(numero => numero >=3)
//console.log(mayores);

// reduce, reduce el array a un solo valor, acumulandolo en el acumulador
let sumaArray = numeros.reduce((acumulador, num) => acumulador + num, 0) 

// console.log(sumaArray);

// El find devuelve el PRIMER elemento que cumpla con la condicion
let busqueda = numeros.find( num => num >= 2);
// console.log(busqueda);

// Some devuelve true si al menos un elemento cumple con la condicion
let encontrado = numeros.some( num => num == 6)
// console.log("Algun elemento cumple la condicion? ", encontrado);

// Every devuelve true si TODOS los elementos cumplen la condicion
let encontrado2 = numeros.every( num => num < 5)

// console.log("Algun elemento cumple la condicion? ", encontrado2);

// Convierte el array a string y los separa a cada elemento por el separador que indiquemos en el join
let nuevoString = numeros.join(" /// ")
//console.log(nuevoString);

// Invierte el array
let invertido = numeros

invertido.reverse()

numeros.reverse()

// extrae una parte del array sin modificar el original
// let arrayNuevo = numeros.slice(2, 5)

// console.log(arrayNuevo);

// console.log(numeros);

// modifica el array eliminando elemento y reemplazandolo por otro, retorna el elemento eliminado
let reemplazo = numeros.splice(2, 1, 99)

// console.log(numeros);
// console.log(reemplazo);

//Concatena el array con otro
let arrayConcatenado = numeros.concat(frutas)
// console.log(arrayConcatenado);

