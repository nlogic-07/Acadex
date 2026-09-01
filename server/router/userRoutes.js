import express from "express";
import {
  registerUser,
  login,
  logout,
  getUser,
  forgotPassword,
  resetPassword,
} from "../controllers/authController.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js";
import multer from "multer";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", login);
router.get("/me", isAuthenticated, getUser);
router.get("/logout", isAuthenticated, logout);
router.post("/password/forgot", forgotPassword);
router.put("/password/reset/:token", resetPassword);

export default router;
