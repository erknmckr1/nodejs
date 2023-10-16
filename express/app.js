import express from 'express';
import bodyParser from 'body-parser';
import adminRoutes from './routes/admin.js'
import path from 'path';

const app = express();
const port = 4000;

const __dirname = path.resolve();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);

app.get("/about", (req, res, next) => {
  console.log("Request Type:", req.method);
  res.send("Welcome to the about page");
});

app.use(express.static(path.join(__dirname,'public')))

app.use("/", (req, res, next) => {
  res.sendFile(path.join(__dirname,'pages','index.html'))
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
