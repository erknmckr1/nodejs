import Product from "../models/product.js";

export const getProducts = (req, res, next) => {
  const products = Product.getAll();
  res.render("admin/products", {
    title: "Admin Products",
    products: products,
    path: "/admin/products",
  });
};

export const getAddProducts = (req, res, next) => {
  res.render("admin/add-product", {
    title: "Add Product Page",
    path: "/admin/add-product",
  });
};

// asagıdakı ıslev de products'ı model den alıp admin/products pug şablonuna yolluyoruz. Ve products'a yolladıgımız sablonda dogrudan erısebılırız.
export const getAdminProduct = (req, res, next) => {
  const products = Product.getAll();
  res.render("admin/products", {
    title: "Admin Products",
    path: "/admin/products",
    products: products,
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
  console.log(products);
  res.redirect("/");
};

export const getEditProduct = (req, res, next) => {
  const productId = req.params.productid;
  const product = Product.getProduct(productId)
  res.render("admin/edit-product", {
    title: "Admin Edit Product",
    path: "/admin/edit-product",
    product:product
  });
};

export const postEditProduct = (req, res, next) => {
  const product = Product.getProduct(req.body.id)
  product.name=req.body.productName
  product.price=req.body.productPrice
  product.image=req.body.productImage
  product.description=req.body.productDescription

  Product.update(product)
  res.redirect("/admin/products");
};
