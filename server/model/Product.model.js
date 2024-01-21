const mongoose=require("mongoose")

const Product=mongoose.model("Model",mongoose.Schema({
    title:String,
    image:String,
    desc:String,
    price:Number
}))
module.exports={Product}