import Router from "express";
import dotenv from "dotenv";
import notificationRoutes from "./notifications";
import authRoutes from "./auth";
import { verifyToken } from "../middlewares";
import { createClient } from "redis";
import { limitRate } from "../middlewares/rateLimiter";

dotenv.config();

const host = process.env.REDIS_HOST || "localhost";

const redisClient = createClient({
  url: `redis://${host}:${process.env.REDIS_PORT}`,
});

redisClient.connect();

const router = Router();

router.use(
  "/notifications",
  verifyToken,
  limitRate(redisClient),
  notificationRoutes
);
router.use("/auth", authRoutes);

export default router;
