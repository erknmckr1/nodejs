import express from "express";
const app = express();
import path from "path";

const router = express.Router();

router.get('/add-product',(req,res,next)=>{
    const __dirname = path.resolve();
    res.sendFile(path.join(__dirname,'../','express','pages','add-product.html'))
})

export default router;