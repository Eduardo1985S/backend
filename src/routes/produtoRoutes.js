import { Router } from 'express';
import {
  listarProdutos,
  buscarProdutoPorId,
  criarProduto,
  atualizarProduto,
  deletarProduto,
} from '../controllers/produtoController.js';

const router = Router();

// Mapeamento das rotas do CRUD de produtos
router.get('/', listarProdutos);
router.get('/:id', buscarProdutoPorId);
router.post('/', criarProduto);
router.put('/:id', atualizarProduto);
router.delete('/:id', deletarProduto);

export default router;
