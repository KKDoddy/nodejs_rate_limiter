import Router from "express";
import { sendEmailNotificaiton } from "../../controllers";

const router = Router();

router.post("/new", sendEmailNotificaiton);

export default router;
