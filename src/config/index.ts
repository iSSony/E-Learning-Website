// Imports
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

// Exporting env variable's value for use in app
export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  default_user_password: process.env.DEFAULT_USER_PASSWORD,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  jwt: {
    secret: process.env.JWT_SECRET,
    expires_in: process.env.JWT_EXPIRES_IN,
    refresh_secret: process.env.JWT_REFRESH_SECRET,
    refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
  },
  stripe__payment_secret: process.env.STRIPE_PAYMENT_SECRET,
  development_frontend_url: process.env.DEVELOPMENT_FRONTEND_URL,
  production_frontend_url: process.env.PRODUCTION_FRONTEND_URL,
};