import express from "express";
const app = express();
import path from "path";
import { getAddProducts, postAddProduct } from "../controllers/products.js"; // Controller dosyasını içe aktarın
const router = express.Router();

// add-product sayfasına get ıstegı oldugu zaman add-product.html sayfasını yolluyoruz.
router.get("/add-product", getAddProducts); // GET işlemi
router.post("/add-product", postAddProduct); // POST işlemi

export default router;
