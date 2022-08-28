import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message: 'Mock Premier League API v1' 
    })
})

import { PORT } from './configs';

app.listen(PORT, () => {
    console.log(`the server is listening on PORT ${PORT}`)
})


