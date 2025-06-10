import express from 'express';
const router = express.Router();
import { CriarFinanceiroController, verFinanceiroController, verFinanceiroIdController, alterarFinanceiroController } from '../controllers/FinanceiroController.js';


router.post('/', CriarFinanceiroController);
router.get('/', verFinanceiroController);
router.get('/:id', verFinanceiroIdController);
router.patch('/:id', alterarFinanceiroController);


export default router;