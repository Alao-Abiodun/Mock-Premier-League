import { Admin } from '../models';
import bcrypt from 'bcryptjs';


class AdminService {

    static async register(data: any): Promise<any> {
        console.log('Admin Service =====')
        const { firstName, lastName, email, password } = data;

        const hashPassword = await bcrypt.hash(password, 10);

        const newAdmin = await Admin.create({firstName, lastName, email, password: hashPassword});
        
        return newAdmin;
    }

    static async login(data: any): Promise<any> {
        const { email, password } = data;

        const adminExist = await Admin.findOne({ email});

        if (!adminExist) {
            throw new Error('admin details does not exist');
        }

        const isPasswordCorrect = await bcrypt.compare(password, adminExist.password);

        

        if (!isPasswordCorrect) {
            throw new Error('password does not match')
        }

        return adminExist;
    }

}

export { AdminService };