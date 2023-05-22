import Router from "express";
import smsRoutes from "./smsRoutes";
import emailRoutes from "./emailRoutes";

const router = Router();

router.use("/sms", smsRoutes);
router.use("/email", emailRoutes);

export default router;
