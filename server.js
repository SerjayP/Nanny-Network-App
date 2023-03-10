const express = require("express");
const path = require('path');
const app = express();
const methodOverride = require('method-override');


// Always require and configure near the top
require('dotenv').config()
const postController = require("./controllers/postController")

//// ===== Connection to Database =====
require("./config/database");
// app.use(cors());
app.use(express.json());

// mongoose.set('strictQuery', false);
// mongoose.connect(process.env.MONGO_URI)

app.use(methodOverride("_method")); // override for put and delete requests from forms
app.use(express.urlencoded({ extended: true })); // parse urlencoded request bodies
app.use(express.static("public")); // serve files from public statically
app.use(express.static(path.join(__dirname, "build")))


// ===== Middleware =====
// app.use((req, res, next) => {
//   console.log("Im running for all routes")
//   console.log("1. middleware")
//   next()
// })



app.use("/posting", postController);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"))
})
app.get("*", (req, res) => {
  res.redirect('/home') // Redirect site to site of choice('/home')

});


app.listen(3001, function() {
    console.log("express server running on port 3001")
})