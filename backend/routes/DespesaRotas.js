import express from 'express';
const router = express.Router();
import { CriarDespesaController } from '../controllers/DespesaController.js';
import { VerDespesaController } from '../controllers/DespesaController.js';
import { DeletarDespesaController } from '../controllers/DespesaController.js';

router.post('/', CriarDespesaController);
router.get('/', VerDespesaController);
router.delete('/', DeletarDespesaController);

export default router;