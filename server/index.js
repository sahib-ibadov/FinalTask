const express=require("express")
const { default: mongoose } = require("mongoose")
const app=express()
require("dotenv").config()
const PORT=process.env.PORT||8089
app.use(express.json())
const cors=require("cors")
app.use(cors())
const ProductRouter=require("./routes/Producr.routes")
mongoose.connect("mongodb+srv://Ismayil:ismayıl123@ismayil.gzwfns1.mongodb.net/start").then(res=>{
    console.log("mongo start");
})
app.use("/models",ProductRouter)
app.listen(PORT,()=>{
    console.log("Port activated");
})