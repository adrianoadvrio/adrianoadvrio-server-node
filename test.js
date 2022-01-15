const http = require('http');

const requestListener = function (req, res) {
  if(req.url == "/"){
    res.end('<h1>Esta es la pagina principal</h1>');
    return;
  }  
  if(req.url == "/nosotros"){
    res.end('<h1>Esta es la pagina sobre nosotros</h1>');
    return;
       }

 res.end('<h1>no hay nada</h1>');
 return;
   
}

const server = http.createServer(requestListener);
server.listen(8080);