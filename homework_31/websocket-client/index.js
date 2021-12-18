const input = document.getElementById('text-input')
const idInput = document.getElementById('id-input')
const sendButton = document.getElementById('send-payload-btn')
let id = ''

const socket = new WebSocket( // Запрос на открытие соединения
    'ws://localhost:9000' // URL для подключения
)

input.disabled=true;
sendButton.disabled = true;

document.getElementById('send-payload-btn')
    .addEventListener('click', () => {
    socket.send(JSON.stringify({
        type:'sendMessage',
        text: input.value,
        ownerId:id,
        recId:idInput.value
    }))
})

socket.addEventListener('open', (e) => { // Функция, вызываемая после успешного открытия соединения
    console.log(`соединение открыто`)
})

socket.onmessage = (e) => { // Обработчик сообщений от сервера◘
    console.group('пришло сообщение')
    const message = JSON.parse(e.data)
    console.groupEnd()
    if (message.type === 'id') {
        id = message.id;
        console.log(`Получили Id:${id}`)
    }else if(message.type==='message'){
        input.value = message.text;
        console.log(`Сообщение от ${message.owner}`)
        console.log(`Текст от ${message.text}`)
        input.disabled=false;
        sendButton.disabled = false;
    }
    console.groupEnd()

}

socket.onclose = (e) => { // Обработчик закрытия соединения
    console.group('соединение закрыто')
}


