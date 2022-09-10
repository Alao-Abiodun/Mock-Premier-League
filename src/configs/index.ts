import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 2004;

export const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://Alao-Abiodun:alao1996@cluster0.fpzmt.mongodb.net/mock_premier_league_db?retryWrites=true&w=majority';

export const ACCESS_TOKEN_SECRET = 'sksksksk';

export const ACCESS_TOKEN_SECRET_EXPIRES_IN='2h';
