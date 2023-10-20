import Product from "../models/product.js";

export const getIndex = (req, res, next) => {
  const products = Product.getAll();
  res.render("shop/index", { title: "Shopping", products: products, path: "/" });
};

export const getProducts = (req, res, next) => {
  const products = Product.getAll();
  res.render("shop/products", { title: "Products", products: products, path: "/products" });
};

export const getProductsDetail = (req, res, next) => {
  res.render("shop/detail", { title: "Details", path: "/detail" });
};

export const getCard = (req, res, next) => {
  res.render("shop/card", { title: "Card", path: "/card" });
};

export const getOrders = (req, res, next) => {
  res.render("shop/orders", { title: "Card", path: "/orders" });
};



