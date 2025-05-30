import express from 'express';
const router = express.Router();
import { FinanceiroController } from '../controllers/FinanceiroController.js';

router.post('/', FinanceiroController);


export default router;