import { criarUser, verUser } from '../models/Cadastro.js';
import bcrypt from 'bcryptjs';

const CadastroController = async (req, res) => {
  try {
    const { nome, senha, email, data_nasc, cpf } = req.body;

    const salt = await bcrypt.genSalt(10);
    const senha_hasheada = await bcrypt.hash(senha, salt)
    
    const userData = {
      nome: nome,
      senha: senha_hasheada,
      email: email,
      data_nasc: data_nasc,
      cpf: cpf
    };

    console.log(userData);

    const userId = await criarUser(userData);
    res
      .status(201)
      .json({ mensagem: 'Usuário cadastrado com sucesso', userId });
  } catch (err) {
    console.error('Erro ao cadastrar usuario:', err);
    res.status(500).json({ mensagem: 'Erro ao cadastrar usuario' });
  }
};

export {CadastroController};