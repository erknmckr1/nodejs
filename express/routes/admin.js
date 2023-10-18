import express from "express";
const app = express();
import path from "path";

const router = express.Router();

// add-product sayfasına get ıstegı oldugu zaman add-product.html sayfasını yolluyoruz.
router.get('/add-product',(req,res,next)=>{
    res.render('add-product',{title:'Add Product Page'})
})

router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
})

export default router;