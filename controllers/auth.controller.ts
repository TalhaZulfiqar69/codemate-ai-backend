import { Request, Response } from 'express';
import { login } from '../services/index.js';

class AuthController {
    static async login(req: Request, res: Response) {
        const data = await login(req, res);
        return data;
    }
}

export default AuthController;
