const Product=require("../models/product")
const User=require("../models/user")
const Category=require("../models/category")

const AProduct=require("../models/AllData")


const fromidable=require("formidable")
const _=require("lodash")
const fs=require("fs")
const { toNamespacedPath } = require("path")


exports.getAllData=(req,res,next,name)=>{
    console.log(name)
    AProduct.find({"categoryName":name})
    .exec((err,data)=>{
        if(err){
            return res.status(400).json({
                error:"error during geting  product Id"
            })
        }
            req.product=data
        next()
    })
}
exports.postAllData=(req,res)=>{
    req.product.map(data=>{
        data.photo=undefined
        const arrData=[data]
    })
      req.product.photo=undefined
      return res.json(req.product)
    
}


exports.getProductById=(req,res,next,id)=>{
            Product.findById(id)
            .populate("category")
            .exec((err,data)=>{
                if(err){
                    return res.status(400).json({
                        error:"error during geting  product Id"
                    })
                }
                    req.product=data
                next()
            })
}

exports.getProductByName=(req,res,next,name)=>{
    Product.find()
    . populate({
        path: 'category',
        match: { name: { $eq: name } },
        
      })
    .exec((err,data)=>{
        if(err){
            return res.status(400).json({
                error:"error during geting  product Id"
                
            })
        }

            req.product=data
        next()
    })
}
exports.getProduct=(req,res)=>{
   
    req.product.photo=undefined
        
        return res.json(req.product)
}

exports.filterProducts=(req,res)=>{
   const filterData=[]
  
    req.product.map(data=>{
        data.photo=undefined
        if (data.category !== null){
              console.log(" category null")
              filterData.push(data)
        }
       
    })
    
      if(filterData.length===0){
            return res.json({
                error:"null cart"
            })
      }
      return res.json(filterData)
  
}


exports.createProduct=(req,res)=>{
    let form =new fromidable.IncomingForm()
    form.keepExtensions =true


    form.parse(req,(err,fields,file)=>{
        if(err) return res.status(400).json({error:"problem with Image"})
        

        const {name,description,price,category,stock}=fields
        
        if(!name ||
            !description ||
            !price ||
            !category ||
            !stock 
            )
        {
            return res.status(400).json({
                error:"please include all fields"
            })
        }

        let product=new Product(fields)

         //handle file
         if(file.photo){
             if(file.photo.size >20000000){
                 return res.status(400).json({error:"file size big"})
             }
             product.photo.data=fs.readFileSync(file.photo.path)
             product.photo.contentType=file.photo.type
         }
         //save to db
         product.save((err,product)=>{
            if(err){
                return res.status(400).json({
                    error:"saving in db is failed"
                })
            }


            Category.findById(product.category)
        .exec((err,cate)=>{
            if(err){
                return res.status(400).json({
                    error:"category not found"
                })
            }

           console.log(cate)
           product.category=cate.name
           const cateName=product.category.name
            const Aproduct=new AProduct({
                _id:product._id,
                name:product.name,
                description:product.description,
                price:product.price,
                categoryName:cate.name,
                stock:product.stock
            }
            )
           
            Aproduct.save((err,data)=>{
                    if(err){
                        return res.json(data) 
                    }
                    
            })
           
        })

            
            console.log("create product:",product)
            return res.json(product)
         })
    })
}



exports.photo=(req,res,next)=>{
        if(req.product.photo.data){
            res.set("Content-Type",req.product.photo.contentType)
            return res.send(req.product.photo.data)
        }
        next()
}


exports.updateProuduct=(req,res)=>{
    let form =new fromidable.IncomingForm()
    form.keepExtensions =true
    form.parse(req,(err,fields,file)=>{
        if(err) return res.status(400).json({error:"problem with Image"})
        

        

        let product= req.product
            product=_.extend(product,fields)
         //handle file
         if(file.photo){
             if(file.photo.size >20000000){
                 return res.status(400).json({error:"file size big"})
             }
             product.photo.data=fs.readFileSync(file.photo.path)
             product.photo.contentType=file.photo.type
         }
         //save to db
         product.save((err,product)=>{
            if(err){
                return res.status(400).json({
                    error:"updation in db is failed"
                })
            }
            const cateName=product.category.name
            const Aproduct=new AProduct({
                name:product.name,
                description:product.description,
                price:product.price,
                categoryName:cateName,
                stock:product.stock
            }
            )
           
            Aproduct.save((err,data)=>{
                    if(err){
                        return res.json(data) 
                    }
                    
            })
            return res.json(product)
         })
    })
}



exports.deleteProduct=(req,res)=>{
    let product=req.product
    product.remove((err)=>{
        if(err) return res.status(400).json({
            errror:"error during delete"
        })
        return res.json({
            message:"successfully deleted",
        })
    })
}

exports.getAllProducts=(req,res)=>{
    let limit=req.query.limit ? parseInt(req.query.limit):8
    let sortBy=req.query.sortBy ?req.query.sortBy:"_id"
    Product.find()
    .populate("category")
    .select("-photo")
    .sort([[sortBy,"asc"]])
    .exec((err,data)=>{
        if(err) return res.status(400).json({
            errror:"no product found"
        })
       
       return res.json(data)
        
    })
    
}


//used in front end
exports.updateStock=(req,res,next)=>{
    let myOperation=req.body.order.produt.map(prod=>{
                 return {
                     updateOne:{
                         filter:{_id:prod._id},
                         update:{$inc:{stock:-prod.count,sold:+prod.count}}
                     }
                 }
    })
    Product.bulkWrite(myOperation,{},(err,product)=>{})
    if(err){
        return res.status(400).json({
            error:"bulk operation failed"
        })
    }
    next()
}

exports.getAllUniquesCategories=(req,res)=>{
            Product.distinct("category",{},(err,cate)=>{
                if(err){
                    return res.status(400).json({
                        error:"no category found "
                    })
                }
                res.json({
                    data:cate
                })
            })
}