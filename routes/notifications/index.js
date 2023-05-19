import Router from "express";
import smsRoutes from "./smsRoutes.js";
import emailRoutes from "./emailRoutes.js";

const router = Router();

router.use("/sms", smsRoutes);
router.use("/email", emailRoutes);

export default router;
