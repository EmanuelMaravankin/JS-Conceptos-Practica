const http = require("http")

const PORT = 3000

const alumnos = [
    {
        nombre: "Augusto",
        edad:28,
    },
    {
        nombre: "Pedro",
        edad: 35,
    },  
       
]

http.createServer((req, res) =>{
   if(req.url === `/`){
    res.writeHead(200, { "content-Type": `text/html`})
    res.write(`<h1> Home de la API</h1>`)
   }else if (req.url === `/api/alumnos`) {
    res.writeHead(200, { "content-Type": `application/json`})
    res.write(JSON.stringify(alumnos))

   }else{

    res.write("todavia nada"),
    res.end()
   }
    

   
}).listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);

}) 