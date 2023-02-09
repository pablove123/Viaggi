import { Router } from 'express'
import * as experiencesCtrl from '../controllers/experiences.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, experiencesCtrl.index)
router.get("/:id", checkAuth, experiencesCtrl.show)
router.post('/',checkAuth, experiencesCtrl.create)
router.post('/:id/review',checkAuth, experiencesCtrl.createReview)
router.put('/:id',checkAuth, experiencesCtrl.update)
router.put('/:id/add-photo',checkAuth, experiencesCtrl.addPhoto)
router.delete("/:id",checkAuth,  experiencesCtrl.delete)
router.delete('/:experienceId/review/:reviewId',checkAuth, experiencesCtrl.deleteReview)


export { router }