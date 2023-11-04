const Product = require('../models/productModel');


//created product --Admin
exports.createProduct=async(req, res, next)=>{
    const product = await Product.create(req.body);
    res.status(201).json({
        success:true,
        product
    });
}

//get all products
exports.getAllProducts=async(req, res)=>{
    const products = await Product.find();
    res.status(200).json({
        success:true,
        products
    });
}

//get single product details
exports.getProductDetails=async(req, res, next)=>{
    const product = await Product.findById(req.params.id);
    if(!product){
        return res.status(500).json({
            success:false,
            message:'product not found'
        });
    }
    res.status(200).json({
        success:true,
        product
    });
}

//update a product --Admin
exports.updateProduct=async(req, res, next)=>{
    let product = await Product.findById(req.params.id);
    if(!product){
        return res.status(500).json({
            success:false,
            message:'product not found'
        })
    }
    product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(200).json({
        success:true,
        product
    });
}

//delete a product
exports.deleteProduct=async(req, res, next)=>{
    const product = await Product.findById(req.params.id);
    if(!product){
        return res.status(500).json({
            success:false,
            message:'product not found'
        });
    }
    await product.deleteOne();
    res.status(200).json({
        success:true,
        message:'product delete successfully' 
    });
}