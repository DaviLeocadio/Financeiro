import express from 'express';
const router = express.Router();
import { CriarFinanceiroController, verFinanceiroController } from '../controllers/FinanceiroController.js';


router.post('/', CriarFinanceiroController);
router.get('/:id', verFinanceiroController);


export default router;