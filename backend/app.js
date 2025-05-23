import express from 'express';
const app = express();
const port = 8080;
import cadastroRotas from './routes/CadastroRotas.js';
import cors from 'cors';

app.use(cors());
app.use(express.json());

app.use('/cadastro', cadastroRotas);

app.get('/', (req, res) => {
  res.status(200).json('Backend');
});

app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`);
});
