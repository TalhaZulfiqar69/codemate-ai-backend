import { type Request, type Response } from 'express';
import { login } from '../services/index';

class AuthController {
    static async login(req: Request, res: Response) {
        const data = await login(req, res);
        return data;
    }
}

export default AuthController;
