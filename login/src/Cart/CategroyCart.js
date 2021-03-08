import React,{useState,useEffect} from 'react'
import { Link, Redirect } from 'react-router-dom';
import { getFilterProduct, getProduct, getProductByName, getProducts } from '../AuthRoutes/helper/adminapicall';
import ShirtCart from '../Shirt/ShirtCart';
import Pics from './PicsBackend';
import AllProducts from './Show';


function CategoryCart({match}) {

  const [empty, setEmpty] = useState(false);
  const [fproduct,setFproduct]=useState([])

  
  
const filterData=(name)=>{
    const list=name.slice(1)
    getProductByName(list).then(data=>{  
    if(data?.error){
    setEmpty(true)
    
    }
      setFproduct(data)
  }).catch(error=>{
console.log("error")
  })
}

  useEffect(() => {
   filterData(match.params.name)
  },[]);

    return (
        <>
<div  className="  container mt-auto  -my-12 mb-12 px-4 md:px-12  ">

  
    <div class="flex flex-wrap -mx-1 lg:-mx-4 "> 
    {
        empty ?(
            <div className="h-screen flex  mx-auto items-center bg-whiite">
            <h1 style={{color:"#050B21"}} className="text-5xl uppercase   ">cart empty....</h1>
        </div> 
               
        ):fproduct.map((data,index)=>{
            return(
             <AllProducts key={index} product={data} />
            )
        })
    }
    
</div>
</div>
       </>
    )
}

export default CategoryCart

/*


*/