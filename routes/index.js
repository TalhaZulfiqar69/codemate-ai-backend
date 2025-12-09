import express from 'express';
import authRouter from './users.js';
import llmRouter from './llm.js';

const router = express.Router();

/* GET default server response. */
router.get('/', function (req, res) {
    res.status(200).json({
        status: 200,
        success: true,
        message: 'Welcome to Backend APIs',
        data: {},
    });
});

router.use('/api/admin', authRouter); // Auth routes
router.use('/api/llm', llmRouter); // LLM routes

export default router
