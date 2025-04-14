// Javascript es un lenguaje sincronizado que se ejecuta en un solo hilo
// Este hilo solo, me refiero a un solo proceso
// Asincronidad: Permite separar el codigo de ejecucion en distintas pilas

/* console.log("1");

// SetTimeout ejecuta lo que pongamos dentro de la funcion despues de un determinado tiempo que le indiques
setTimeout(() => {
   console.log("2"); 
}, 2000 );

console.log("3");


/* ------- CALLBACK ----------- */

// Funcion que se usa como argumento

/*function suma (a,b){
   return a + b
}

function operacionMatematica (num1,num2,CALLBACK){
   return CALLBACK(num1,num2)
}

const resultado = operacionMatematica (5,10,suma)
const resultado2 = operacionMatematica (5,10,(num, num2) =>{
   return num * num2 // se puede asignar una funcion con =>{ }
})

//console.log("Resultado: ", resultado);
//console.log("Resultado: ", resultado2);

let numeros = [1,2,3,4,5]

let resultadoMap = numeros.map((num)=> {
   return num * 5
})

console.log("Resultado Map: ", resultadoMap); */

// CALLBACK HELL: Una anidacion de callbacks, muy dificil de leer

function obtenerUser(id,callback){
   setTimeout(() => {
      console.log("Se encontro el usuario: ", id);callback()
   }, 1000);
}

function llamandoUsers(){
   obtenerUser(1, () =>{
      obtenerUser(2, () =>{
         obtenerUser(3, () =>{
            console.log("Termino");
         })
      })
   })
}

llamandoUsers()