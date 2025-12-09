import express from 'express';
// import loginValidation from '../middlewares/validation_middleware.js';
import LLMController from '../controllers/llm.controller.js';

const router = express.Router();


router.post("/chat", LLMController.getLLMResponse);

export default router;
