import { criarFinanceiro, verFinanceiro } from '../models/Financeiro.js';

const CriarFinanceiroController = async (req, res) => {
  try {
    const { renda, data_rec, id_user } = req.body;

    if (!renda) {
      console.log('Renda não especificada');
      return [];
    }
    if (!data_rec) {
      console.log('Data de recebimento não especificada');
      return [];
    }

    const financeiroData = {
      renda: renda,
      data_rec: data_rec,
      id_user: id_user,
    };

    await criarFinanceiro(financeiroData);
    res
      .status(200)
      .json({ mensagem: 'Financeiro criado com sucesso: ', renda: renda, data_rec: data_rec });
  } catch (err) {
    console.error('Erro ao criar dados financeiros');
  }
};

const verFinanceiroController = async (req, res) => {
  try{
    const financeiro = await verFinanceiro(req.params.id);

  if (financeiro) {
    res.json({ dado: financeiro })
  } else{
    res.status(404).json({ mensagem: 'Dado não encontrado' });
  }
  } catch(err){
    console.error('Erro ao pegar dados do financeiro', err);
    res.status(500).json({ mensagem: 'Erro ao obter dado por ID' });
  }
  
}

export { CriarFinanceiroController,verFinanceiroController };
