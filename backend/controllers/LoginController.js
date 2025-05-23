import jwt from 'jsonwebtoken';
import { read, compare } from '../config/database.js';
import crypto from 'crypto';


const LoginController = async (req, res) => {
  const { nome, senha } = req.body;

  try {
    const usuario = await read('usuario', `nome = '${nome}'`);

    if (!usuario) {
      return res.status(404).json({ mensagem: 'Usuário não encontrado' });
    }

    const senhaCorreta = await compare(senha, usuario.senha);

    if (!senhaCorreta) {
      return res.status(404).json({ mensagem: 'Senha incorreta' });
    }

    const token = jwt.sign({ id: usuario.id, nome: usuario.nome }, JWT_SECRET, {
      expiresIn: '1d',
    });

    res.json({ mensagem: 'Login realizado com sucesso', token });
  } catch (err) {
    console.error('Erro ao fazer login', err);
    res.status(500).json({ mensagem: 'Erro ao fazer login' });
  }
};

function generateSecretKey() {
  return crypto.randomBytes(64).toString('hex');
  }
  
const secretKey = generateSecretKey();

export { LoginController, secretKey };
