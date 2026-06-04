import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";

//router.get("/", memberController.goHome);

//router.get("/", memberController.getLogin);

//router.get("/", memberController.getSignup);

router.post("/login", memberController.login);
router.post("/signup", memberController.signup);


export default router;