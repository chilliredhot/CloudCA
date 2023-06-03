const express = require("express");
const mysql = require("mysql2");
const doenv = require("dotenv");
const path = require("path");
const hbs = require("hbs");
const ejs = require("ejs");
const cookieParser = require("cookie-parser");

const app = express();


doenv.config({
    path: "./.env",
  });

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE,
  });
  
  
  db.connect((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("MySQL Successfully connected");
    }
  });

app.use(cookieParser());
app.use(express.urlencoded({extended: false}));

//console.log(__dirname);
const location = path.join(__dirname, "./public");
app.use(express.static(location));
app.set("view engine", "hbs");


const partialsPath = path.join(__dirname, "./views/partials");
hbs.registerPartials(partialsPath);

//const partialsPath = path.join(__dirname, "./views/pages");
//hbs.registerPartials(partialsPath);


app.use('/',require('./routes/pages'));
app.use("/auth", require("./routes/auth"));


app.listen(8000, '127.0.0.1', () => {
    console.log('Server has started');
});
