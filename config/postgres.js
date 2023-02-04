import Pool from 'pg-pool';
import { config } from 'dotenv';

config()

export const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port:process.env.PG_PORT,
}) 



