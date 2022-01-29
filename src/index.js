require('dotenv').config()


const Server = require('./models/server.class')

const server = new Server()

server.execute()
// const express = require('express')
// const app = express()


// const server = require('http').createServer(app)



// io.on('connection', (socket) => {
//         // console.log("CLient connected")

//         // console.log(socket.id)

//         // socket.emit("hello", "Hello World")

//         socket.on('msg-to-server', e => {
//             io.emit('msg-to-client', e)
//         })
// })

