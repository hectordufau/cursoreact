
import bodyParser from 'body-parser';
import express, { Express } from 'express';

const server: Express = express()
const port: number = 3003

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(port, () => {
    console.log(`BACKEND running on port ${port}.`)
})