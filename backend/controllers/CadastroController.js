import { criarUser } from '../models/Cadastro.js';

const CadastroController = async (req, res) => {
  try {
    const { nome, senha } = req.body;

    const userData = {
      nome: nome,
      senha: senha,
    };

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