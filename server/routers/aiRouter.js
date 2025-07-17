import express from "express";

const router = express.Router();


// Get Controller
import { getReview } from "../controllers/aiController.js";


// Routes
router.route("/review").post(getReview)


export default router;