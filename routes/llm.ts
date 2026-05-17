import express, { Router } from 'express';
import LLMController from '../controllers/llm.controller.js';

const router: Router = express.Router();

router.post("/chat", LLMController.getLLMResponse);

export default router;
