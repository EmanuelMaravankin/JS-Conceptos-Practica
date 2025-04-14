// Promesas nos permiten manejar tareas de forma asincronica (al igual que los callbacks)
// Una promesa representa una operacion o valor que todavia no sucedio, lo hace en el futuro

// Promesa basica

console.log("Inicio");

const promesaBasica = new Promise((resolve, reject )=>{
    setTimeout(() => {
        const exito = true
        console.log("Procesando promesa...");

        //if(exito === true)
        if(exito){
            resolve("Operacion exitos")
        }else{
            reject("Operacion fallida")
        }
    }, 2000);
}) //se crea la promesa

//console.log("Operacion fue: ", promesaBasica);

// Uso del then / catch / finally
// THEN: entonces...., sirve para llegar al resolve
// CATCH: atrapa el error, atrapa el reject
// FINALLY: finalmente... le da el cierre a la promesa. Es casi opcional

/* promesaBasica.then((respuesta)=>{
    console.log("Respuesta: ", respuesta);
}).catch((error) => {
    console.log("Algo salio mal...");
    console.error("El catch: ", error);
})
.finally(() =>{
    console.log("Termine");
    console.log("El finally se ejecuta siempre haya error o no");
}) */



// Funcion que devuelve promesa

function obtenerNumeroDelay(num){
    return new Promise((res, rej) =>{
        if(!num) rej(0)
            setTimeout(() => {
                res(num)
            }, 1000);
    })
}

function obtenerPalabraDelay(palabra){
    return new Promise((res, rej) =>{
        if(!palabra) rej("Vacio...")
            setTimeout(() => {
                res(palabra)
            }, 1000);
    })
}

/* obtenerNumeroDelay(null)
    .then((num) => {console.log("Numero recibido: ",num)}) 
    .catch((e) =>{console.log("Algo salio mal: " ,e)} ) */

// Promesas con Fetch:
// Fetch es una funcion nativa de javascript para consultas HTTP
// Fetch: me devuelve una promesa
// .json(): EXTRAE LA DATA DE LA RESPUESTA DE LA API

const pokemon = fetch("https://pokeapi.co/api/v2/pokemon/charmander")
                .then((res) => res.json())
                .then((data) =>{
                   // console.log("Data: ", data.name);
                    //console.log("Imagen: ", data.sprites.front_default);
                })
                .catch((error) => {
                    //console.log("No se encuentra");
                })

 // Async / AWAIT
 // Es una forma mas LEGIBLE de trabajar con promesas
 // ASYNC: Se usa para declarar una funcion asincrona
 // AWAIT: A/WAIT Se usa para decir que espere a que termine esa promesa
 
 async function obtenerPokemon(){
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/charmander")
    //console.log(("Res: ", respuesta));
    const data = await respuesta.json()

    console.log("Data: ", data.name);

    const pokemon = [data].map((poke) =>{
        return{
            nombre: poke.name,
            id: poke.id

        } 
    })

    console.log("Pokemon: ", pokemon);
 }
                
                
 //obtenerPokemon()               

 async function proceso(){
   /*  const palabra = await obtenerPalabraDelay("Parlante")
    const numero = await obtenerNumeroDelay(27)
    console.log(palabra);
    console.log(numero); */

    Promise.all([obtenerNumeroDelay(27),obtenerPalabraDelay("Megafono")])
    .then((resultados) => {
        console.log("Resultado: ", resultados);
        return resultados
    }).catch((error) =>{
        console.log("Error fue: ", error);
    })
 }

 proceso()

 // PROMISE.ALL

