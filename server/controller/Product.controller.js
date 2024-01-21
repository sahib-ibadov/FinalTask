const {Product}=require("../model/Product.model")

const ProductController=({
    getAll:async(req,res)=>{
        try{
            const products=await Product.find({})
        res.status(200).send(products)
        }
        catch(error){
            res.status(404).send("error")
        }
    },
    getById:async(req,res)=>{
        try{
            const {id}=req.params
            const product=await Product.findById(id)
            res.status(200).send(product)
        }
        catch(error){
            res.status(404).send("error")
        }
    },
    add:async(req,res)=>{
        try{
            const {title,image,desc,price}=req.body
            const newProduct=new Product({title,image,desc,price})
            await newProduct.save()
            res.status(201).send("product added")
        }
        catch(error){
            res.status(404).send("error")
        }
    },
    delete:async(req,res)=>{
        try{
            const {id}=req.params
            await Product.findByIdAndDelete(id)
            res.send("product deleted")
        }
        catch(error){
            res.send("error")
        }
    }
})
module.exports={ProductController}