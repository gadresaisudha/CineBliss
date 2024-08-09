import express from 'express';
import { createOrder, getUserOrders } from '../controllers/orderController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').put(authenticate,createOrder);
router.route('/myorders').put(authenticate,getUserOrders);

export default router;