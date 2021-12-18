const ws = require('ws');
const fs = require('fs')
const{v4:generateUUID}=require('uuid')
const server = new ws.Server(
    {
        port:9000
    }
)

const  clients = {}

server.on('connection',(client)=>{
    const uuid=generateUUID()
    client[uuid]=client
    fs.readFile( // Прочитать файл асинхронно
        './data.txt', //Путь к файлу
        'utf8', // Кодировка
        (err, data) => { // Сallback, вызываемф после прочтения
            if (err) {
                console.log(err);
                client.send(JSON.stringify({
                    type:'message',
                    text:err.message
                }))
            } else {
                client.send(JSON.stringify({
                    type:'message',
                    text:data
                }))
            }
        }
    )

    client.on('close',()=>delete clients[uuid])
    client.on('message',(json)=>{
        const message = JSON.parse(json)
        if(message.type==='sendMessage'){

            fs.writeFile( // Асинхронная запись файла (содержимое перезаписывается)
                './data.txt', //Путь
                message.text,//Содержимое
                'utf8', //Кодировка
                (err) => { //Коллбек
                    console.log(err ? err : 'done')
                })
        }
    })
})