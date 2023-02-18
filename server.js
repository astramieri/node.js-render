const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Node.js server is up and running.');
    res.end();
});

server.listen('3000');