import express from "express";
const router = express.Router();
import multer from "multer";
import {
  createClient,
  deleteClient,
  getAllClients,
  getClientById,
  updateClient,
} from "../controllers/clientinfoController.js";

// Configure Multer for file upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/", upload.single("photo"), createClient);
router.get("/", getAllClients);
router.get("/:id", getClientById);
router.put("/:id", upload.single("photo"), updateClient);
router.delete("/:id", deleteClient);

export default router;
