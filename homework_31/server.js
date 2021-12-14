const ws = require('ws');
const server = new ws.Server(
    {
        port:9000
    }
)

server.on('connection',(client)=>{
    client.send('Hello, client')
})