import { create } from '../config/database.js';

const criarFinanceiro = async (financeiroData) => {
  try {
    return await create('financeiro', financeiroData);
  } catch (err) {
    console.error('Não foi possível adicionar financeiro à tabela: ', err);
    throw err;
  }
};

export { criarFinanceiro };
