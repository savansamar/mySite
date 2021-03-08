import React from 'react'
import { Link } from 'react-router-dom'
import Pics from './PicsBackend';

const AllProducts=({product})=>{
    const cartTitle = product ? product.name : "A photo from pexels";
  const cartDescrption = product ? product.description : "Default description";
  const cartPrice = product ? product.price : "DEFAULT";

    return (





<div   class=" flex flex-col  px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 mt-8 ">
       <Pics product={product} />
       <form class="flex-auto p-6">
          <div class="flex flex-wrap">
            <h1 class="flex-auto text-xl font-semibold">
              {cartTitle}
            </h1>
            <div class="text-xl font-semibold text-gray-500">
            Price: {cartPrice}
            </div>
            <div class="w-full flex-none text-sm font-medium text-gray-500 mt-2">
              In stock {product.stock}
            </div>
          </div>
          
          <div class="flex space-x-3 mb-4 text-sm font-medium">
            <div class="flex-auto flex space-x-3">
              <button style={{backgroundColor:"#050B21"}} class="w-1/2 h-8 flex items-center justify-center rounded-md text-white" type="submit">Buy now</button>
              <button class="w-1/2 flex items-center justify-center rounded-md border border-gray-300" type="button">Add to bag</button>
            </div>
            
          </div>
          <p style={{color:"#050B21"}} class="text-sm ">
            Free shipping on all continental US orders.
          </p>
        </form>
        
    </div>
     



   
    )
}

export default  AllProducts




/*

      


      <div   class=" flex flex-col  px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 border-2 border-black-200 rounded-lg m-2 ">
        <Pics product={product} />
        
       
        <form class="flex-auto p-6">
          <div class="flex flex-wrap">
            <h1 class="flex-auto text-xl font-semibold">
              Classic Utility Jacket
            </h1>
            <div class="text-xl font-semibold text-gray-500">
             {cartPrice}
            </div>
            <div class="w-full flex-none text-sm font-medium text-gray-500 mt-2">
              In stock
            </div>
          </div>
          
          <div class="flex space-x-3 mb-4 text-sm font-medium">
            <div class="flex-auto flex space-x-3">
              <button style={{backgroundColor:"#050B21"}} class="w-1/2 h-8 flex items-center justify-center rounded-md text-white" type="submit">Buy now</button>
              <button class="w-1/2 flex items-center justify-center rounded-md border border-gray-300" type="button">Add to bag</button>
            </div>
            
          </div>
          <p style={{color:"#050B21"}} class="text-sm ">
            Free shipping on all continental US orders.
          </p>
        </form>
        
    
   
</div>
*/
