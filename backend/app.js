import express from 'express';
const app = express();
const port = 8080;
import userRotas from './routes/UserRotas.js';
import cors from 'cors';

app.use(cors());
app.use(express.json());

app.use('/login', userRotas);

app.get('/', (req,res)=>{
    res.status(200).json('Backend');
});

app.listen(port, ()=>{
    console.log(`Server running in http://localhost:${port}`);
})