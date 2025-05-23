import { create } from '../config/database.js';

const criarUser = async (userData) => {
  try {
    return await create('usuario', userData);
  } catch (err) {
    console.error('Erro ao cadastrar usuário: ', err);
    throw err;
  }
};

export { criarUser };
