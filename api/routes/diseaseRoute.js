import express from 'express'
import { prediction } from '../controllers/diseaseController.js'

const router = express.Router();

//predict heart disease
router.post("/", prediction);

export default router;