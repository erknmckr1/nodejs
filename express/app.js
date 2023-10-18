import express from 'express';
import bodyParser from 'body-parser';
import adminRoutes from './routes/admin.js'
import path from 'path';

const app = express();
const port = 4000;

const __dirname = path.resolve();

// hangı engıne paketı kullanacagımızı sectik.
app.set('view engine','pug')
app.set('views','./pages')

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);

app.get("/about", (req, res, next) => {
  console.log("Request Type:", req.method);
  res.send("Welcome to the about page");
});

// public klasorunu dısa aktardık.
app.use(express.static(path.join(__dirname,'public')))

app.get("/", (req, res, next) => {
  const products = [
    {name:"Iphone 13 Pro Max",price:"30000",description:"Granit",image:"/iphone13.jpeg"},
    {name:"Iphone 13 Pro Max",price:"30000",description:"Granit",image:"/iphone13.jpeg"},
    {name:"Iphone 13 Pro Max",price:"30000",description:"Granit",image:"/iphone13.jpeg"},
    {name:"Iphone 13 Pro Max",price:"30000",description:"Granit",image:"/iphone13.jpeg"},
  ]
  res.render(path.join(__dirname,'pages','index'),{title:'Home Page',products:products})
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
