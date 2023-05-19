import Router from "express";
import notificationRoutes from "./notifications/index.js";
import tokenValidator from "../middlewares/tokenValidator.js";

const router = Router();

router.use("/notifications", tokenValidator, notificationRoutes);

export default router;
