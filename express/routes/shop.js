import express from 'express'
import { getProducts,getIndex,getCard,getOrders,getProductsDetail } from '../controllers/shop.js';

const router = express.Router();

router.get('/',getIndex);
router.get('/products',getProducts);
router.get('/details',getProductsDetail);
router.get('/card',getCard);
router.get('/orders',getOrders);


export default router;