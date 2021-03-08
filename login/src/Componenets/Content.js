import React ,{useState,useEffect,useRef}from 'react'
import { TweenMax } from "gsap";
import { Link, Redirect } from 'react-router-dom';
import { getCategories, getProductByName } from '../AuthRoutes/helper/adminapicall';
import Products from '../Cart/Products';
import { UseCategoryImage } from './categoryImage';
function Content() {
  const pic=useRef(null)
  const text=useRef(null)
const [categories,setCategories]=useState([])
const getCategory=()=>{
    getCategories().then(data=>{
        if(data.error){
                console.log("eror")
        }
        setCategories(data)
        
    })
}

useEffect(()=>{
        TweenMax.to(pic.current,{duration: 2, x: 40, ease: "bounce"});
        TweenMax.to(text.current,{duration: 2, y: 40, ease: "bounce"});
getCategory()
    },[])

return (

<>    
<div   className="  container bg-white  mx-auto px-4 md:px-12 rounded-lg ">
    <div class="flex flex-wrap -mx-1 lg:-mx-4 "> 
   {categories.map((data,index)=>{
      const name=data.name
       return(
        <div  key={index} class=" flex mt-4 flex-col justify-center items-center px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3  ">
            <UseCategoryImage name={name} />
        <header class="flex  items-center justify-center leading-tight p-2 md:p-4">
            
        <div style={{backgroundColor:"#050B21"}} className="w-32 flex  items-center justify-center font-bold py-2 px-4 rounded">

<Link className="text-white" to={`/category/cart/:${name}`}>{data.name}</Link>

</div>
        </header>
    </div>
       )
   })}
</div>
</div>
</>
    )
}

export default Content

