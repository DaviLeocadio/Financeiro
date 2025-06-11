import { criarFinanceiro, verFinanceiroId, alterarFinanceiro, verFinanceiro } from '../models/Financeiro.js';

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

const verFinanceiroIdController = async (req, res) => {
  try {
    const financeiro = await verFinanceiroId(req.params.id);

    if (financeiro) {
      res.json({ dado: financeiro })
    } else {
      res.status(103).json({ mensagem: 'Dado não encontrado' });
    }
  } catch (err) {
    console.error('Erro ao pegar dados do financeiro', err);
    return res.status(500).json({ mensagem: 'Erro ao obter dado por ID' });
  }

}

const verFinanceiroController = async (req, res) => {
  try {
    const info = await verFinanceiro();
    return res.status(201).send(info);
  } catch (err) {
    console.error('Erro ao pegar dados do financeiro', err);
    return res.status(500).json({ mensagem: 'Erro ao obter dado financeiro' });
  }
}

const alterarFinanceiroController = async (req, res) => {
  try {
    const { total } = req.body;
    const id = req.params.id;

    if (!renda) {
      console.log('Renda não especificada');
      return [];
    }
    if (!data_rec) {
      console.log('Data de recebimento não especificada');
      return [];
    }

    const financeiroData = {
      total: total
    };

    await alterarFinanceiro(financeiroData, id);
    res.status(200).json({ mensagem: 'Financeiro atualizado com sucesso', total: total });
  } catch (err) {
    console.error('Erro ao atualizar dados financeiros', err);
    res.status(500).json({ mensagem: 'Erro ao atualizar dados financeiros' });
  }
}

export { CriarFinanceiroController, verFinanceiroIdController, verFinanceiroController, alterarFinanceiroController };
