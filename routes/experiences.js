import { Router } from 'express'
import * as experiencesCtrl from '../controllers/experiences.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/

router.delete("/:id",  experiencesCtrl.delete)
router.post('/:id/review', experiencesCtrl.createReview)
router.delete('/:experienceId/review/:reviewId', experiencesCtrl.deleteReview)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, experiencesCtrl.index)
router.get("/:id", checkAuth, experiencesCtrl.show)
router.post('/', experiencesCtrl.create)
router.put('/:id', experiencesCtrl.update)


export { router }