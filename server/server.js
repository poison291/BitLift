import express from 'express'
import { WebSocketServer } from 'ws'


const app = express()
const PORT = process.env.PORT || 5000



const server = app.listen(PORT, () => {
    console.log(`Signaling server running on http://localhost:${PORT}`)
})

const webSocketServer = new WebSocketServer ({ server})


const room = {}