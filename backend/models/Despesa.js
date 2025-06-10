import { create, readAll, deleteRecord } from '../config/database.js';

const criarDespesa = async (despesaData) => {
  try {
    return await create('despesas', despesaData);
  } catch (err) {
    console.error('Erro ao criar despesa: ', err);
    return [];
  }
};

const verDespesa = async () => {
  try {
    return await readAll('despesas');
  } catch (err) {
    console.error('Erro ao ler despesas: ', err);
  }
};

const deletarDespesa = async (id_despesas) => {
  try {
    await deleteRecord('despesas', `id_despesas = ${id_despesas}`);
    console.log('Despesa deletada com sucesso');
    return { mensagem: 'Despesa deletada com sucesso' };
  } catch (err) {
    console.error('Erro ao deletar despesa: ', err);
    return { mensagem: 'Erro ao deletar despesa'}
  }
};

export { criarDespesa, verDespesa, deletarDespesa };
