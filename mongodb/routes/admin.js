import express from "express";
import {
  createAdmin,
  getAllAdmin,
  loginAdmin,
  updateAdmin,
  deleteAdmin,
} from "../controller/admin.js";

const router = express.Router();

router.post("/api/admin", createAdmin);
router.get("/api/admin", getAllAdmin);
router.post("/api/admin/login", loginAdmin);
router.put("/api/admin/:id", updateAdmin);
router.delete("/api/admin/:id", deleteAdmin);

export default router;
