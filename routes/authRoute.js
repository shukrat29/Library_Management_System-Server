import express from "express";
import { insertNewUser } from "../controllers/authController.js";

const router = express.Router();

// user signup
router.post("/register", insertNewUser);

export default router;
