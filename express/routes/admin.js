import express from "express";
const app = express();
import path from "path";

const router = express.Router();

// add-product sayfasına get ıstegı oldugu zaman add-product.html sayfasını yolluyoruz.
router.get('/add-product',(req,res,next)=>{
    const __dirname = path.resolve();
    res.render(path.join(__dirname,'../','express','pages','add-product.pug'))
})

router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
})

export default router;