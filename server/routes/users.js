import express from 'express'
import {getUser} from '../controllers/users.js'
const router = express.Router();
router.post('/user',getUser)

export default router;