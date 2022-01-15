const http = require('http');

const requestListener = function (req, res) {
  console.log(req.url) // about
  res.writeHead(200);
  res.end('Hello, World!'); // root
}

const server = http.createServer(requestListener);
server.listen(8080);