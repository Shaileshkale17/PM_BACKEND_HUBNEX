import { Router } from "express";
import { create, getalls } from "../controllers/ProjectInterest.js";

const router = Router();

router.route("/save").post(create);

router.route("/fetch-all").get(getalls);

export default router;
