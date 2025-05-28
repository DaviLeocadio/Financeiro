import express from 'express';
const app = express();
const port = 8080;
import loginRotas from './routes/LoginRotas.js';
import cadastroRotas from './routes/CadastroRotas.js';
import financeiroRotas from './routes/FinanceiroRotas.js';
import cors from 'cors';

app.use(cors());
app.use(express.json());

app.use('/login', loginRotas);
app.use('/cadastro', cadastroRotas);
app.use('/financeiro', financeiroRotas);

app.get('/', (req, res) => {
  res.status(200).json('Backend');
});

app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`);
});
