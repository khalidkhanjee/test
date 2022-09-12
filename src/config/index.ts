import dotenv from "dotenv";

const result = dotenv.config();
// console.log(result);
if (result.error) {
  throw result.error;
}

// ! because no error will create.
export const APP_PORT = process.env.APP_PORT!;
export const DB_PORT = process.env.DB_PORT!;
export const DB_HOST = process.env.DB_HOST!;
export const DB_CLIENT = process.env.DB_CLIENT!;
export const DB_USER = process.env.DB_USER!;
export const DB_PASS = process.env.DB_PASS!;
export const DB_NAME = process.env.DB_NAME!;

