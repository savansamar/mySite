import React,{useState,useEffect} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DropDown from "./Componenets/DropDown";
import Footer from "./Componenets/Footer";
import NavBar from "./Componenets/NavBar";
import About from "./pages/About";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import SignUp from "./Form/SignUp"
import SignIn from "./Form/SignIn"
import Admin from "./AuthRoutes/Admin";
import AdminDashboard from "./AuthRoutes/AdminDashboard";
import AddCategory from "./AuthRoutes/AddCategory";
import AddProduct from "./AuthRoutes/AddProduct";
import ManageCategories from "./AuthRoutes/ManageCategories";
import Products from "./Cart/Products";
import CategoryCart from "./Cart/CategroyCart";
import UpdateProduct from "./AuthRoutes/UpdateProduct";
import ManageProduct from "./AuthRoutes/ManageProduct";

const Routes = () => {

  const [isOpen,setIsOpen]=useState(false)
  const toggle=()=>{
    setIsOpen(!isOpen)
  }

  

  


  useEffect(()=>{


    const hideMenu=()=>{
      if(window.innerWidth >768 && isOpen){
        setIsOpen(false)
      }
    }
    window.addEventListener('resize',hideMenu)
    return()=>{
      window.removeEventListener('resize',hideMenu)
    }
    
  },[])
  return (
    <>
    
    <BrowserRouter>
  
    <NavBar toggle={toggle} />
    <DropDown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" exact component={About} />
        <Route path="/Menu" exact component={Menu} />
        <Route path="/Signup" exact component={SignUp} />
        <Route path="/Login" exact component={SignIn} />
        <Route path="/Cart" exact component={Products} />
        <Admin path="/Admin/Dashboard" exact component={AdminDashboard}  />
        <Admin path="/Admin/Create/Category"  component={AddCategory}  />
        <Admin path="/Admin/Create/Product"  component={AddProduct}  />
        <Admin path="/Admin/Manage/Category"  component={ManageCategories}  />
        <Admin path="/admin/product/update/:productId" exact component={UpdateProduct}/>
        <Admin path="/Admin/Manage/Product" exact component={ManageProduct}/>
        
        <Route path="/category/cart/:name" exact component={CategoryCart} />


      
      </Switch>
      <Footer />
    </BrowserRouter>
    </>
  );
};
export default Routes
