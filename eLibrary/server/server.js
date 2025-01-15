import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';


const app = express();
app.use(express.json(), cors({origin:['http://localhost:5173', 'https://api.itbook.store/1.0/', 'http://localhost:8000']}));
dotenv.config();
const PORT = process.env.PORT;
dbConnect();
app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
);