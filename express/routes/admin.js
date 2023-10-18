import express from "express";
const app = express();
import path from "path";

const router = express.Router();
export const products = [
  {
    name: "Iphone 13 Pro Max",
    price: "30000",
    description: "Granit",
    image: "/iphone13.jpeg",
  },
  {
    name: "Iphone 13 Pro Max",
    price: "30000",
    description: "Granit",
    image: "/iphone13.jpeg",
  },
  {
    name: "Iphone 13 Pro Max",
    price: "30000",
    description: "Granit",
    image: "/iphone13.jpeg",
  },
  {
    name: "Iphone 13 Pro Max",
    price: "30000",
    description: "Granit",
    image: "/iphone13.jpeg",
  },
];

// add-product sayfasına get ıstegı oldugu zaman add-product.html sayfasını yolluyoruz.
router.get("/add-product", (req, res, next) => {
  res.render("add-product", { title: "Add Product Page" });
});

router.post("/add-product", (req, res, next) => {
  products.push({
    name: req.body.name,
    price: req.body.rice,
    description: req.body.description,
    image: req.body.image,
  });
  res.redirect("/");
});

export default router;
