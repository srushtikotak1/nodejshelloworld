const http = require('http');


// Read the host address and the port from the environment
//const hostname = process.env.HOST;
//const port = process.env.PORT;
const hostname = '127.0.0.1';
const port = 1111;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  process.exit()
});
