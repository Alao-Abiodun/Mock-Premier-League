import express, { Application, Request, Response } from 'express';
import { connectDB } from './database'
import { PORT } from './configs';
import dotenv from 'dotenv';
import morgan from 'morgan'

dotenv.config();

// instantiate express application
const app: Application = express();

app.use(express.json());
app.use(morgan('dev'));

// mounting the routes
import { adminRouter } from './routes';

// home page API
app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message: 'Mock Premier League API v1' 
    })
})

app.use('/api/v1', adminRouter)

app.listen(PORT, () => {
    console.clear();
    console.log(`the server is listening on PORT ${PORT}`)
    connectDB();
})


