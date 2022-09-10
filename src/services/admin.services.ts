import { Admin } from '../models';
import bcrypt from 'bcryptjs';
import argon2 from 'argon2';


class AdminService {

    static async register(data: any): Promise<any> {
        console.log('Admin Service =====')
        const { firstName, lastName, email, password } = data;

        const hashPassword = await argon2.hash(password);

        const newAdmin = await Admin.create({firstName, lastName, email, password: hashPassword});
        
        return newAdmin;
    }

    static async login(data: any): Promise<any> {
        const { email, password } = data;

        const adminExist = await Admin.findOne({ email});

        console.log(adminExist);

        if (!adminExist) {
            throw new Error('admin details does not exist');
        }

        const isPasswordCorrect = await argon2.verify(adminExist.password, password);

        console.log(isPasswordCorrect)

        

        if (!isPasswordCorrect) {
            throw new Error('password does not match')
        }

        return adminExist;
    }

}

export { AdminService };