import express from "express";
import { authenticate, authorizeAdmin } from "../middleware/authMiddleware.js";
import { createMovie, getAllMovies, deleteMovie, getMovie, updateMovie } from "../controllers/movieController.js";

const router = express.Router();
router.route('/').post(authenticate,authorizeAdmin,createMovie).get(authenticate,getAllMovies);
router.route('/:id').delete(authenticate,authorizeAdmin,deleteMovie).get(authenticate,authorizeAdmin,getMovie).put(authenticate,authorizeAdmin,updateMovie);
export default router;