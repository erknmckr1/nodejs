import express from "express";
import bodyParser from "body-parser";
import adminRoutes from "./routes/admin.js"; 
import shopRoutes from "./routes/shop.js"
import path from "path";
import {getProducts } from "./controllers/admin.js";
import { notFount } from "./controllers/errors.js";
const app = express();
const port = 4000;

const __dirname = path.resolve();

// hangı engıne paketı kullanacagımızı sectik.
app.set("view engine", "pug");
//pug sablonlarını pages dızınınde tutuyoruz.
app.set("views", "./pages");

app.use(bodyParser.urlencoded({ extended: false }));

// "/admin" uzantısına gelen ıstekler adminRoutes alındaki rotalar ile karşılanır.
app.use("/admin", adminRoutes);
app.use("/",shopRoutes)

// public klasorunu dısa aktardık.
app.use(express.static(path.join(__dirname, "public")));

//app.get("/", getProducts);

app.use(notFount)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);

});
