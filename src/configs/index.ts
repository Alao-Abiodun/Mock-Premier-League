import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 2004;

export const MONGO_URI = 'mongodb://localhost:27017/mock_premier_league_db';

export const ACCESS_TOKEN_SECRET = 'sksksksk';

export const ACCESS_TOKEN_SECRET_EXPIRES_IN='2h';
