import dotenv from 'dotenv'

dotenv.config()

export const config = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    MONGO_URL: process.env.MONGO_URL,
    PORT: process.env.PORT
}