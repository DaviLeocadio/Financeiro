import { create, read, readAll, update } from '../config/database.js';

const criarFinanceiro = async (financeiroData) => {
  try {
    return await create('financeiro', financeiroData);
  } catch (err) {
    console.error('Não foi possível adicionar financeiro à tabela: ', err);
    throw err;
  }
};

const verFinanceiroId = async (id) => {
  try {
    return await read('financeiro', `id_user = ${id}`);
  } catch (err) {
    console.error('Não foi possível ler o financeiro', err);
    throw err;
  }
}

const verFinanceiro = async () => {
  try{
  return await readAll('financeiro')

  } catch(err){
    console.error('Não foi possível ler todos os dados de financeiro: ', err);
    throw err;
  }
}

const alterarFinanceiro = async (id, financeiroData) => {
  try {
    return await update('financeiro', financeiroData, `id_user = ${id}`);
  } catch (err) {
    console.error('Não foi possível alterar o financeiro', err);
    throw err;
  }
}

export { criarFinanceiro, verFinanceiroId, alterarFinanceiro, verFinanceiro };
