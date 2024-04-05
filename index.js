const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const app = express()

app.use(express.json());

app.get('/', (req, res) =>{
    res.send("Hello from Node API");
});

app.post('/api/products', async (req,res) => {
    try{
       const product= await Product.create(req.body);
       res.status(200).json(product);
    }
    catch{
        res.status(500).json({message:error.message});
    }
});

app.get('/api/product/:id',async (req,res) => {
  try{
    const { id } = req.params;
     product = await Product.findById(id);
    res.status(200).json(product);
  }
  catch{
      res.status(500).json({message:error.message});
  }
});


//update a product
app.put('/api/product/:id', async (req,res) => {
  try {
    const {id} = req.params;
    await Product.findByIdAndUpdate(id, req.body)

    if(!product){
      return res.status(404).json({message: "Product not found"});
    }

    const updateProduct =await Product.findById(id);
    res.status(200).json(updateProduct)
  }
  catch{
    res.status(500).json({message:error.message});
  }
});

app.get('/api/products', async (req,res) => {
    try{
       const products = await Product.find({});
       res.status(200).json(products);
     }
     catch{
        res.status(500).json({message:error.message});
     }
});
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