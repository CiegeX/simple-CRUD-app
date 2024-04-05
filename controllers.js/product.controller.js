const Product = require('../models/product.model');


// read all the products from the database  
const getProducts =async (req, res) => {
    try{
        const products = await Product.find({});
        res.status(200).json(products);
      }
      catch{
         res.status(500).json({message:error.message});
      }

}

//read a single product from the database 
const getSingleProduct = async (req, res) => {
    try{
        const { id } = req.params;
         product = await Product.findById(id);
        res.status(200).json(product);
      }
      catch{
          res.status(500).json({message:error.message});
      }
}
// Post on to the database
const createProduct = async (req,res) => {
    try{
       const product= await Product.create(req.body);
       res.status(200).json(product);
    }
    catch{
        res.status(500).json({message:error.message});
    }
}

//  Delete from database
const deleteProduct = async (req,res) => {
    try{
      const {id} = req.params;
  
      const product = await Product.findByIdAndDelete(id);
  
      if(!product){
        return res.status(404).json({message: "Product not found"});
  
      }
      res.status(200).json({ message: "Product deleted successfully"});
    }
    catch (error) {
      res.status(500).json({message:error.message});
    }
}


//Update from database
const updateProduct= async (req,res) => {
    try {
      const {id} = req.params;
      const product = await Product.findByIdAndUpdate(id, req.body);
  
      if(!product){
        return res.status(404).json({message: "Product not found"});
      }
  
      const updateProduct =await Product.findById(id);
      res.status(200).json(updateProduct);
    }
    catch{
      res.status(500).json({message:error.message});
    }
}



module.exports = {
    getProducts, getSingleProduct, createProduct , deleteProduct, updateProduct
}