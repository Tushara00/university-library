import config from "@/lib/config"
import { drizzle } from "drizzle-orm/neon-http";
import {neon} from "@neondatabase/serverless"

if (!config.env.databaseUrl) {
    throw new Error("DATABASE_URL is not defined");
  }
  const sql = neon(config.env.databaseUrl);

export const db = drizzle({client:sql});
