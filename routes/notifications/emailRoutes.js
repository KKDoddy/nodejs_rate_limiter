import Router from "express";
import { sendEmailNotificaiton } from "../../controllers/index.js";

const router = Router();

router.post("/new", sendEmailNotificaiton);

export default router;
