import { Router } from "express";
import {
  DeleteTeam,
  GetTeam,
  UpdateTeam,
  addTeam,
} from "../controllers/Team.controllers.js";

const router = Router();
UpdateTeam, DeleteTeam;
router.route("/create").post(addTeam);
router.route("/GetAll").get(GetTeam);
router.route("/Update/:id").put(UpdateTeam);
router.route("/deleted/:id").delete(DeleteTeam);

export default router;
