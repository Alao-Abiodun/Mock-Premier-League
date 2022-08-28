import { Request, Response } from 'express';
import { IAdmin } from '../models';
import { AdminService } from '../services';

class AdminController {

    static async signup(req: Request, res: Response): Promise<any>{
        console.log('AdminController ======')
        const result = await AdminService.register(req.body);

        return res.status(201).json(result);
    }

    static async signin(req: Request, res: Response): Promise<any>{
        const result = await AdminService.login(req.body);

        return result;
    }
}


export { AdminController }