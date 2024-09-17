import express from 'express';
import { createOrder, getUserOrders } from '../controllers/orderController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(authenticate,createOrder);
router.route('/myorders').get(authenticate,getUserOrders);

export default router;