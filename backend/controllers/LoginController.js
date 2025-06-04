import jwt from 'jsonwebtoken';
import { read, compare } from '../config/database.js';
import { JWT_SECRET } from '../config/jwt.js';


const LoginController = async (req, res) => {
  const { nome, senha, email } = req.body;

  try {
    const usuario = await read('usuario', `nome = '${nome}' or email = '${email}'`);

    if (!usuario) {
      console.log('Usuário não encontrado', nome);
      return res.status(200).json({ mensagem: 'Usuário não encontrado', nome: 'null', senha: 'null', email: 'null' });
    }

    const senhaCorreta = await compare(senha, usuario.senha);

    if (!senhaCorreta) {
      console.log('Senha incorreta');
      return res.status(200).json({ mensagem: 'Senha incorreta', senha: 'null', nome: 'null', email: 'null' });
    }

    const token = jwt.sign({ id: usuario.id, nome: usuario.nome }, JWT_SECRET, {
      expiresIn: '10s',
    });

    const nome_user = usuario.nome;
    const id_user = usuario.id_user;

    res.status(200).json({ token: token, nome: nome_user, id: id_user });
  } catch (err) {
    console.error('Erro ao fazer login', err);
    res.status(500).json({ mensagem: 'Erro ao fazer login' });
  }
};


export { LoginController };
