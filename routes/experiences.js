import { Router } from 'express'
import * as experiencesCtrl from '../controllers/experiences.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/

router.post('/', experiencesCtrl.create)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, experiencesCtrl.index)


export { router }