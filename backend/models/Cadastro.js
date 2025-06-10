import { create, read } from '../config/database.js';

const criarUser = async (userData) => {
  try {
    return await create('usuario', userData);
  } catch (err) {
    console.error('Erro ao cadastrar usuário: ', err);
    throw err;
  }
};

const verUser = async(email)=>{
  try{
    await readAll('usuario', `email = ${email}`);
  } catch{
    console.error('Erro ao ver usuários: ', err);
    throw err;
  }
}

export { criarUser, verUser };
