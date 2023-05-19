import Router from "express";
import { sendSmsNotificaiton } from "../../controllers/index.js";

const router = Router();

router.post("/new", sendSmsNotificaiton);

export default router;
