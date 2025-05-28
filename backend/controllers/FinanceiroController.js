import { criarFinanceiro } from '../models/Financeiro.js';

const FinanceiroController = async (req, res) => {
  try {
    const { renda, data_rec, id_user } = req.body;

    if(!renda){
      console.log('Renda não especificada');
      return [];
    }

    if(!data_rec){
      console.log('Data de recebimento não especificada');
      return [];
    }

    const financeiroData = {
      renda: renda,
      data_rec: data_rec,
      id_user: id_user,
    };

    const financeiro_id = await criarFinanceiro(financeiroData);

    res
      .status(200)
      .json({ mensagem: 'Financeiro criado com sucesso: ', financeiro_id });
  } catch (err) {
    console.error('Erro ao criar dados financeiros');
  }
};

export { FinanceiroController };
