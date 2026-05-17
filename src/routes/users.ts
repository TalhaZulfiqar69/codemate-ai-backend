import express, { Router } from 'express';
import { loginValidation } from '../middlewares/validation_middleware';
import AuthController from '../controllers/auth.controller';

const router: Router = express.Router();

router.get("/login", AuthController.login);

export default router;
