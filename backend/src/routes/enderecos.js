import { Router } from 'express'
import { autenticar } from '../middlewares/auth.js'
import { criarEnderecoController, listarEnderecoController, atualizarEnderecoController, deletarEnderecoController } from '../controllers/enderecoController.js'

const router = Router()

router.post('/', autenticar, criarEnderecoController)
router.get('/', autenticar, listarEnderecoController)
router.put('/:id', autenticar, atualizarEnderecoController)
router.delete('/:id', autenticar, deletarEnderecoController)

export default router