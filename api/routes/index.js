import express from 'express'
import login from './login'
import order from './order'

const router = express.Router();

router
    .use(login)
    .use(order);

export default router