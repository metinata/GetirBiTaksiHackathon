import express from 'express'
import * as controller from './controller'

const router = express.Router();

router
    .route('/login')
        .get(controller.users)
        .post(controller.login)

export default router