import express from 'express';
import { listarUserController, listarUserporIdController } from '../controllers/UserController.js';
const router = express.Router();

router.get('/', listarUserController);
router.get('/:id', listarUserporIdController);


export default router; 