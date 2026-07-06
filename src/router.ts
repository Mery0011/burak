import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";

//router.get("/", memberController.goHome);

//router.get("/", memberController.getLogin);

//router.get("/", memberController.getSignup);
/** Member*/
router.post("/member/login", memberController.login);
router.post("/member/signup", memberController.signup);
router.get("/member/detail", memberController.verifyAuth);

/** Product*/
/** Order*/
export default router;