import express from "express";
import { prediction } from "../controllers/diseaseController.js";

const router = express.Router();

//predict CKD
router.post("/", prediction);

export default router;
