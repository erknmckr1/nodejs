import Product from "../models/product.js";

export const getProducts = (req, res, next) => {
  const products = Product.getAll();
  res.render("index", { title: "Home Page", products: products, path: "/" });
 
};

export const getAddProducts = (req, res, next) => {
  res.render("add-product", {
    title: "Add Product Page",
    path: "/admin/add-product",
  });
};

export const postAddProduct = (req, res, next) => {
  const products = new Product(
    req.body.productName,
    req.body.productPrice,
    req.body.productImage,
    req.body.productDescription
  );
  products.saveProduct();
  res.redirect("/");
};

