import { criarDespesa, verDespesa, deletarDespesa } from '../models/Despesa.js';

const CriarDespesaController = async (req, res) => {
  try {
    const { categoria, data_pag, valor, descricao, id_user } = req.body;

    const despesaData = {
      categoria: categoria,
      data_pag: data_pag,
      valor: valor,
      descricao: descricao,
      id_user: id_user,
    };

    const despesa = await criarDespesa(despesaData);
    console.log(despesa);

    res
      .status(200)
      .json({ mensagem: 'Realizado a criação das despesas', despesa });
  } catch (err) {
    console.error('Erro ao receber informações de despesas: ', err);
    return [];
  }
};

const VerDespesaController = async (req, res) => {
  try {
    const despesas = await verDespesa();
    res.status(200).json(despesas);
  } catch (err) {
    console.error('Erro a ver despesas:', err);
    res.status(500).json({ mensagem: 'Erro nas despesas' });
  }
};

const DeletarDespesaController = async (req, res) => {
  try {
    const id_despesas = req.params.id;
    console.log(id_despesas);
    await deletarDespesa(id_despesas);
    res.status(200).json({mensagem:'Despesa excluido com sucesso!'});
  } catch {
    console.log(req.body)
    res.status(500).json({ mensagem: 'Erro ao deletar despesa' });
  }
};

export { CriarDespesaController, VerDespesaController, DeletarDespesaController };
