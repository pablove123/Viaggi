import { Router } from 'express'
import * as experiencesCtrl from '../controllers/profiles.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, experiencesCtrl.index)
router.post('/', checkAuth, experiencesCtrl.create)


export { router }