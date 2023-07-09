import http from "http"

http.createServer((req, res)=>{
//    res.writeHead(200, {'Content-Type':'application/json'})
    res.setHeader('Content-Disposition','attachment; filename=lista.csv');
    res.writeHead(200, {'Content-Type':'application/csv'});
    
    res.write("id, nombre");
    res.write("\n1, Juan");
    res.write("\n2, Pedro");
    res.write("\n3, Maria");
    


    res.end();
}).listen(8080);

console.log("Escuchando el puerto", 8080);