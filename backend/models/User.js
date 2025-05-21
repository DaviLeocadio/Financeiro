import { readAll, read } from "../config/database.js";

const listarUser = async () => {
    try {
      return await readAll('usuario');
    } catch (err) {
      console.error('Erro ao listar usuarios: ', err);
      throw err;
    }
  };

const listarUserporId = async(nome)=>{
  try {
    return await read('usuario', `nome = ${nome}`);
  } catch (err) {
    console.error('Erro ao listar o usuario solicitado: ', err);
    throw err;
  }
}


export { listarUser, listarUserporId };
