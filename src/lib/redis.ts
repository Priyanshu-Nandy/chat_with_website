import { Redis } from "@upstash/redis";

export const redis=Redis.fromEnv()//this will take data from env to create the redis required