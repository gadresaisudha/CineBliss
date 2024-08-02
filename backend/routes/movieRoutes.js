import express from "express";
import { authenticate, authorizeAdmin } from "../middleware/authMiddleware.js";
import { createMovie, getAllMovies, deleteMovie, getMovie, updateMovie } from "../controllers/movieController.js";
import formidable from "express-formidable";

const router = express.Router();
router.route('/').post(authenticate,authorizeAdmin,formidable(),createMovie).get(authenticate,getAllMovies);
router.route('/:id').delete(authenticate,authorizeAdmin,deleteMovie).get(authenticate,getMovie).put(authenticate,authorizeAdmin,updateMovie);
export default router;