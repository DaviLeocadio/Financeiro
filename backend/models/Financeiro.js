import { create, read } from '../config/database.js';

const criarFinanceiro = async (financeiroData) => {
  try {
    return await create('financeiro', financeiroData);
  } catch (err) {
    console.error('Não foi possível adicionar financeiro à tabela: ', err);
    throw err;
  }
};

const verFinanceiro = async (id)=>{
  try{
    return await read('financeiro', `id_user = ${id}`);
  } catch(err){
    console.error('Não foi possível ler o financeiro', err);
    throw err;
  }
}

export { criarFinanceiro, verFinanceiro };
