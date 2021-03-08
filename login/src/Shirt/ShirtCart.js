import React from 'react'
import { Link } from 'react-router-dom'
const ShirtCart=({product})=>{
    const cartTitle = product ? product.name : "A photo from pexels";
  const cartDescrption = product ? product.description : "Default description";
  const cartPrice = product ? product.price : "DEFAULT";

    return (
       
      
       <div  class="  container  -my-12 mb-12 mx-auto my-auto md:px-12  ">
    <div class="flex flex-wrap -mx-1 lg:-mx-4 "> 
  
        <div   class=" flex flex-col  px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3  ">
        <article class="  overflow-hidden rounded-lg shadow-lg">
            <img alt="Placeholder" class=" object-none  h-auto w-full md:object-scale-down "
             src="https://picsum.photos/600/400/?random"/>
        
        </article>
        <header class="flex  items-center justify-center leading-tight p-2 md:p-4">
            <h1 class="text-lg">
                <a class="no-underline hover:underline  text-black text-3xl font-bold" href="#">
                {cartTitle} 
                </a>
            </h1>  
              
        </header>
        <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900">
            {cartDescrption}
            </h2>
            

            <div style={{backgroundColor:"#050B21"}} className="w-32   font-bold py-2 px-4 rounded">
        <button className="h-12 bg-re-500 w-24 text-white">{cartPrice}</button>
<Link className="text-white" to="/About" >DEmo Button Buy</Link>

   </div> 
        </div>

      
    
   
</div>
</div>
</div>
        
    )
}

export default ShirtCart


/*
<div  class="  container  -my-12 mb-12 mx-auto px-4 md:px-12  ">
    <div class="flex flex-wrap -mx-1 lg:-mx-4 "> 
   {Image.map((data,index)=>{
       return(
        <div  key={index} class=" flex flex-col  px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3  ">
        <article class="  overflow-hidden rounded-lg shadow-lg">
            <img alt="Placeholder" class=" object-none  h-auto w-full md:object-scale-down "
             src={data.pic}/>
        
        </article>
        <header class="flex  items-center justify-center leading-tight p-2 md:p-4">
            <h1 class="text-lg">
                <a class="no-underline hover:underline  text-black text-3xl font-bold" href="#">
                    Article Title
                </a>
            </h1>  
              
        </header>
        <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900">
                San Diwego Bardone Invivtioal Reacap
            </h2>
            <p className="mt-3 text-gray-500">
                Evere summer i came us and go  to walk and then after came back i drink juice and used to this in my daily routine. f i not wake wae  i used to alarm clock to wake me up
            </p>

            <div style={{backgroundColor:"#050B21"}} className="w-32   font-bold py-2 px-4 rounded">

<Link className="text-white" to="/About" >Explore</Link>

   </div> 
        </div>

      
    </div>
       )
   })}
</div>
</div>
*/
