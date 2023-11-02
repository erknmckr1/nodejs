import express from 'express'
import {getProduct, getProducts,getIndex,getCard,getOrders,getProductsDetail } from '../controllers/shop.js';

const router = express.Router();

router.get('/',getIndex);
router.get('/products',getProducts);
router.get('/product-detail/:productid',getProduct)
router.get('/details',getProductsDetail);
router.get('/card',getCard);
router.get('/orders',getOrders);


export default router;