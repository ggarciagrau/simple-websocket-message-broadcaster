class Sockets {

    constructor(io) {
        this.io = io
        this.socketEvents()
    }

    socketEvents() {
        this.io.on('connection', (socket) => {
            // console.log("CLient connected")
            // console.log(socket.id)
            // socket.emit("hello", "Hello World")

            socket.on('msg-to-server', e => {
                this.io.emit('msg-to-client', e)
            })
        })
    }
}

module.exports = Sockets