import { Router } from 'express'
import { autenticar } from '../middlewares/auth.js'
import { criarPedidoController, listarPedidosClienteController, buscarPedidoController, cancelarPedidoController } from '../controllers/pedidoController.js'

const router = Router()

router.post('/', autenticar, criarPedidoController)
router.get('/', autenticar, listarPedidosClienteController)
router.get('/:id', autenticar, buscarPedidoController)
router.patch('/:id', autenticar, cancelarPedidoController)

export default router