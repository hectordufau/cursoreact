import Express, { NextFunction, Request, Response } from 'express';
import indexRoute from '../routes';
import { config } from "dotenv";
import cors from './cors';
config();

const port: number = 3003
const server = Express()

server.use(Express.json());
server.use(cors)
server.use(indexRoute)
/* Error Handler */
server.use((error: any, _req: Request, res: Response, _next: NextFunction) => {
    res.status(501).json({
        status: false,
        message: "An error occurred",
        error,
    })
})

server.listen(port, () => {
    console.log(`BACKEND running on port ${port}.`)
})