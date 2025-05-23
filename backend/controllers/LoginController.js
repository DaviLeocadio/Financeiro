import jwt from 'jsonwebtoken';
import { read, compare } from '../config/database.js';


const loginController = async (req, res) => {
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

    res.json({ mensagem: 'Login realizado com sucesso', token });
  } catch (err) {
    console.error('Erro ao fazer login', err);
    res.status(500).json({ mensagem: 'Erro ao fazer login' });
  }
};

export { loginController };
