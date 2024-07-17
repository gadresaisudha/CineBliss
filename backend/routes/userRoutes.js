import express from "express";
import { createUser, deleteUser, getAllUsers, getCurrentUserProfile, getUserById, loginUser, logoutUser, updateCurrentUserProfile, updateUserById } from "../controllers/userController.js";
import {authenticate,authorizeAdmin} from '../middleware/authMiddleware.js';
const router = express.Router();

router.route('/').post(createUser).get(authenticate,authorizeAdmin,getAllUsers);
router.post('/login',loginUser);
router.post('/logout',logoutUser);
router.route('/profile').get(authenticate,getCurrentUserProfile).put(authenticate,authorizeAdmin,updateCurrentUserProfile);
router.route('/:id').delete(authenticate,authorizeAdmin,deleteUser).get(authenticate,authorizeAdmin,getUserById).post(authenticate,authorizeAdmin,updateUserById);

export default router;