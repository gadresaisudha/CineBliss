import express from "express";
import { authenticate, authorizeAdmin } from "../middleware/authMiddleware.js";
import { createMovie, getAllMovies } from "../controllers/movieController.js";

const router = express.Router();
router.route('/').post(authenticate,authorizeAdmin,createMovie).get(authenticate,getAllMovies);
router.route('/:id').delete(authenticate,authorizeAdmin,de)
export default router;