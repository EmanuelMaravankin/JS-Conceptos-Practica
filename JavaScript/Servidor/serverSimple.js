import http from "http";
const PORT = 3000

http.createServer((req,res) => {
    res.write("Hola Mundo")
    res.end()
}).listen(3000,() =>{
    console.log("Servidor corriendo en el puerto ", PORT);
})