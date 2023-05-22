import Router from "express";
import { login } from "../../controllers";
import { signinValidator, validateForm } from "../../middlewares";

const router = Router();

router.post("/login", signinValidator, validateForm, login);

export default router;
