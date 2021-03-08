const express=require('express')
const bodyParser = require('body-parser')
const app=express()
require("dotenv").config()
const cookieParser=require('cookie-parser')
const cors=require("cors")
const mongoose = require('mongoose');
const authRoutes=require("./routes/auth.js")
const cateRoutes=require("./routes/category.js")
const userRoutes=require("./routes/user.js")
const proRoutes=require("./routes/product.js")
//DataBase
mongoose.connect(process.env.MYSTORE, {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true})
.then(()=>{
    console.log("DB Connected")
}) 



//Middlewear
app.use(bodyParser.json())

app.use(cookieParser())
app.use(cors())



//custom Middlewear
app.use("/api",authRoutes)
app.use("/api",cateRoutes)
app.use("/api",userRoutes)
app.use("/api",proRoutes)

const PORT=8000
app.get("/",(req,res)=>{
    res.send("savan")
})
app.listen(PORT,()=>{
console.log(`${PORT} Running`)
})