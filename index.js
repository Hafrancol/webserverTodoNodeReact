const http = require('node:http');

const server = http.createServer((req, res)=>{


res.writeHead(200, "todo bien..", { 'Content-Type': 'application/json'})

res.write(JSON.stringify({
    id: 1,
    name:'pedro',
    time: new Date().toLocaleTimeString(),
}));
res.end();

});

server.listen(8000);