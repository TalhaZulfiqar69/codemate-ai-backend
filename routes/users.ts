import express, { Router } from 'express';
import { loginValidation } from '../middlewares/validation_middleware.js';
import AuthController from '../controllers/auth.controller.js';

const router: Router = express.Router();

router.get("/login", AuthController.login);

export default router;
