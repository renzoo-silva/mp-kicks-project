import { Router } from 'express'
import { autenticar } from '../middlewares/auth.js'
import { criarClienteController, loginClienteController, buscarClienteController, atualizarClienteController, deletarClienteController } from '../controllers/clienteController.js'

const router = Router()

router.post('/register', criarClienteController)
router.post('/login', loginClienteController)
router.get('/:id', autenticar, buscarClienteController)
router.put('/:id', autenticar, atualizarClienteController)
router.delete('/:id', autenticar, deletarClienteController)

export default router