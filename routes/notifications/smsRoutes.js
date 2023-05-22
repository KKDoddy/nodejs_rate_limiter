import Router from "express";
import { sendSmsNotificaiton } from "../../controllers";

const router = Router();

router.post("/new", sendSmsNotificaiton);

export default router;
