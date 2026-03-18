import { Router } from 'express'
import { autenticar } from '../middlewares/auth.js'
import { criarVarianteController, listarVariantesController, atualizarVarianteController, deletarVarianteController } from '../controllers/varianteController.js'

const router = Router()

router.get('/:id/variantes', listarVariantesController)
router.post('/:id/variantes', autenticar, criarVarianteController)
router.put('/:id/variantes/:varianteId', autenticar, atualizarVarianteController)
router.delete('/:id/variantes/:varianteId', autenticar, deletarVarianteController)

export default router