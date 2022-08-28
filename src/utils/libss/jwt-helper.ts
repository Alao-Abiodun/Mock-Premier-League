import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';
import { ACCESS_TOKEN_SECRET, ACCESS_TOKEN_SECRET_EXPIRES_IN } from '../../configs';
import { authPayload } from '../../dtos';

dotenv.config();


export const signAccessToken = (data: authPayload): string => {
    const payload = data;

    const options = {
        expiresIn: ACCESS_TOKEN_SECRET_EXPIRES_IN
    }
    const token = JWT.sign(payload, ACCESS_TOKEN_SECRET, options);

    return token;
}

export const verifyAccessToken = (token: string): object => {
    const payload = JWT.verify(token, ACCESS_TOKEN_SECRET) as authPayload;

    return { payload };
}