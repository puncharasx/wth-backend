import { Router } from 'express'
import { postController } from '../../controllers'
const router = Router()

router.get('/',postController.getAll)
router.get('/:id',postController.get)
router.post('/',postController.create)
router.put('/:id',postController.update)
router.delete('/:id',postController.delete)
router.get('/generate/:count',postController.generate)

export default router