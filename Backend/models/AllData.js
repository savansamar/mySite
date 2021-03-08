const { ObjectID } = require("mongodb");
const mongoose=require("mongoose")
const {ObjectId}=mongoose.Schema;

const pproductSchema=new mongoose.Schema({
name:{
    type:String,
    trim:true,
    trim:true,
    requied:true,
    maxlength:32

},
description:{
    type:String,
    trim:true,
  
    maxlength:3200
},
price:{
    type:Number,
 
    trim:true,
    maxlength:32
},
categoryName:{
        type:String,
        trim:true,
      
        maxlength:320
   
}
,
stock:{
    type:Number
},
sold:{
    type:Number,
    default:0

},
photo:{
    data:Buffer,
    contentType:String
}

},{timestamps:true})
module.exports=mongoose.model("AProduct",pproductSchema)