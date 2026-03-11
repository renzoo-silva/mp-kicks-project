import { Router } from 'express'
import { listarProdutosController, criarProdutoController, buscarProdutoPorIdController, atualizarProdutoController, deletarProdutoController } from '../controllers/produtoController.js'

const router = Router()

router.get('/', listarProdutosController)
router.post('/', criarProdutoController)
router.get('/:id', buscarProdutoPorIdController)
router.put('/:id', atualizarProdutoController)
router.delete('/:id', deletarProdutoController)

export default router
