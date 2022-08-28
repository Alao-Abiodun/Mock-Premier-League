import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { MONGO_URI } from '../configs'; 

dotenv.config();

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Database connected successfully');
    } catch (error) {
        console.log(error.message);
        console.log('Database was not connected successfully');
    }
}
