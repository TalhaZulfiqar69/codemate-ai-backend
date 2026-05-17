import express, { type Router, type Request, type Response } from 'express';
import authRouter from './users';
import llmRouter from './llm';

const router: Router = express.Router();

router.get('/', function (req: Request, res: Response) {
    res.status(200).json({
        status: 200,
        success: true,
        message: 'Welcome to Backend APIs',
        data: {},
    });
});

router.use('/admin', authRouter);
router.use('/llm', llmRouter);

export default router;
