import express from "express";
const app = express();
import path from "path";
import { getAddProducts, postAddProduct,getEditProduct,postEditProduct,getAdminProduct } from "../controllers/admin.js"; // Controller dosyasını içe aktarın
const router = express.Router();

// add-product sayfasına get ıstegı oldugu zaman add-product.html sayfasını yolluyoruz.
router.get("/add-product", getAddProducts); // GET işlemi
router.post("/add-product", postAddProduct); // POST işlemi
router.get("/edit-products", getEditProduct); 
router.get("/edit-products", postEditProduct); 
router.get("/products", getAdminProduct); // admin/products sayfasına atılan get ıstegı sonucunda "getAdminProduct" işlevi çalısacak.
export default router;
