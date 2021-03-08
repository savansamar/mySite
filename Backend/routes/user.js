const express=require("express")
const router=express.Router()
const {getUserById,getUser,updateUser,UserPurchaseList,use}=require("../controllers/user")
const {isSignedIn,isAdmin,isAuthenticated}=require("../controllers/auth")

router.param("userId",getUserById)
router.get("/user/:userId",isSignedIn,isAuthenticated,getUser)
router.put("/user/:userId",isSignedIn,isAuthenticated,updateUser)

router.get("/orders/user/:userId",isSignedIn,isAuthenticated,UserPurchaseList)


module.exports=router