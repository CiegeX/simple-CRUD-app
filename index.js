const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoute = require("./routes/product.routes")
const app = express();



//middleware json format
app.use(express.json());
//middleware for url format
app.use (express.urlencoded({extended:false}))

// routes 
app.use("/api/products", productRoute);




// post onto the local server 
app.get('/', (req, res) =>{
    res.send("Hello from Node API");
});










// connecting to mongodb
mongoose.connect('mongodb+srv://cjjimmy193:bHm57obV4uOh1iJA@cluster0.xni4oe0.mongodb.net/')
  .then(() => {
    console.log('Yes its connected!');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    })
})
  .catch(() => {
    console.log("Connection failed");
  });