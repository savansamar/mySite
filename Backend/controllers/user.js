const User=require("../models/user")
const Order=require("../models/order")

exports.getUserById=(req,res,next,id)=>{
    User.findById(id)
    .exec((err,user)=>{
            if(err || !user){
                return res.status(400).json({
                    errror:"no user was found in Db"
                })
            }
            //console.log("out")

            req.profile=user
            next()
            //console.log("out")
            /// put next() there because after getttmg next it moves to another
            //withiut seeign braces
            //for ex- use console.log() before and afrer see result

    })
}

exports.getUser=(req,res)=>{
    req.profile.salt=undefined
    req.profile.encry_password=undefined

    //todo
    return res.json(req.profile)
}


exports.updateUser=(req,res)=>{
    User.findByIdAndUpdate(
        {_id:req.profile._id,},
        {$set:req.body},
        {new:true,useFindAndModify:false},
        (err,user)=>{
            if(err){
                return res.status(400).json({
                    error:"you are not auhotrize"
                })
            }
            user.salt=undefined;
            user.encry_password=undefined

            res.json(user)
        }

    )

}

exports.UserPurchaseList=(req,res)=>{
    Order.find({user:req.profile._id})
    .populate("user","_id name")
    .exec((err,order)=>{
        if(err){
            return res.status(400).json({
                error:"no order in this account"
            })
        }
        return res.json(order)

    })
}



exports.pushOrderInPurchaseList = (req, res, next) => {
    let purchases = [];
    req.body.order.products.forEach(product => {
      purchases.push({
        _id: product._id,
        name: product.name,
        description: product.description,
        category: product.category,
        quantity: product.quantity,
        amount: req.body.order.amount,
        transaction_id: req.body.order.transaction_id
      });
    });
  
    //store thi in DB
    User.findOneAndUpdate(
      { _id: req.profile._id },
      { $push: { purchases: purchases } },
      { new: true },
      (err, purchases) => {
        if (err) {
          return res.status(400).json({
            error: "Unable to save purchase list"
          });
        }
        next();
      }
    );
  };
  



