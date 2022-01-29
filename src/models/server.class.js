const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const path = require('path')
const Sockets = require('./sockets.class')

class Server {

    constructor() {
        console.log(process.env.PORT)
        this.app = express()
        this.port = process.env.PORT || 8081

        this.server = http.createServer(this.app)
        this.io = socketio(this.server)
    }

    middlewares() {
        this.app.use(express.static(path.resolve(__dirname, '../../public')))
    }

    confSockets() {
        new Sockets(this.io)
    }

    execute() {
        this.middlewares()
        this.confSockets()
        this.server.listen(this.port, () =>
            console.log("Server running in " + this.port))
    }
}

module.exports = Server