import { Router } from 'express'
import * as itinerariesCtrl from '../controllers/itineraries.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/



/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

router.post('/', checkAuth, itinerariesCtrl.create)
router.post('/:itineraryId/experiences/:experienceId', checkAuth, itinerariesCtrl.addToItinerary)



export { router }