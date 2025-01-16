import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import userRouter from './routes/user.routes.js';
import libraryRouter from './routes/library.routes.js'
const app = express();
app.use(express.json(), cors({origin:['http://localhost:5173', 'https://api.itbook.store/1.0/', 'http://localhost:8000']}));
dotenv.config();
const PORT = process.env.PORT;

app.use("/api", router);

dbConnect();
app.use(userRouter,libraryRouter);
app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
);
