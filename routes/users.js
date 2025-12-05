import express from 'express';
import loginValidation from '../middlewares/validation_middleware.js';
import AuthController from '../controllers/auth.controller.js';
const router = express.Router();


router.get("/login", AuthController.login); // Admin Login api

export default router;
