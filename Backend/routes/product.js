const express=require('express')
const router=express()
const {getUserById}=require("../controllers/user")
const {isSignedIn,isAdmin,isAuthenticated}=require("../controllers/auth")
const {getCategoryById}=require("../controllers/category.js")
const {getAllData,postAllData,getProductById,createProduct,getProduct,photo,updateProuduct,deleteProduct,getAllProducts,getProductByName,filterProducts,data,getAllUniquesCategories}=require("../controllers/product")

router.param("userId",getUserById)
router.param("productId",getProductById)
router.post("/create/product/:userId",isSignedIn,isAuthenticated,isAdmin,createProduct)
router.get("/product/:productId",getProduct)

router.get("/product/photo/:productId",photo)
router.put("/update/product/:productId/:userId",isSignedIn,isAuthenticated,isAdmin,updateProuduct)
router.delete("/delete/product/:productId/:userId",isSignedIn,isAuthenticated,isAdmin,deleteProduct)



router.param("categoryDataName",getProductByName)
router.get("/filter/:categoryDataName",filterProducts)

router.get("/products",getAllProducts)

router.param("categoryname",getAllData)
router.get("/Allproduct/:categoryname",postAllData)

router.get("/products/categories",getAllUniquesCategories)

module.exports=router;