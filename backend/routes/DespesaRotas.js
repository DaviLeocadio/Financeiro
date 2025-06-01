import express from 'express';
const router = express.Router();
import { CriarDespesaController } from '../controllers/DespesaController.js';
import { VerDespesaController, DeletarDespesaController } from '../controllers/DespesaController.js';

router.post('/', CriarDespesaController);
router.get('/', VerDespesaController);
router.delete('/:id', DeletarDespesaController);

export default router;