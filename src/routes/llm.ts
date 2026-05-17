import express, { type Router } from 'express';
import LLMController from '../controllers/llm.controller';

const router: Router = express.Router();

router.post("/chat", LLMController.getLLMResponse);

export default router;
