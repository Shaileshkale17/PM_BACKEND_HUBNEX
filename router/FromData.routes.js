import { Router } from "express";
import { FromData } from "../controllers/FormData.js";

const router = Router();

router.route("/save").post(FromData);

export default router;
