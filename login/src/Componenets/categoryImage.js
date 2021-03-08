import React ,{useState,useEffect}from 'react'
import { getCategories, getProductByName } from '../AuthRoutes/helper/adminapicall';
import { API } from '../backendConnect';

 export const  UseCategoryImage=({name})=>{
    const [productImage,setProductImage]=useState([''])
    const [product,setProduct]=useState([''])
    const [productId,setProductId]=useState([''])

  
    const filterData=(name)=>{
      getProductByName(name).then(data=>{  
        if(data?.error){
           console.log(data.error)
            }
            if(!data.error){
                setProduct(data)
            }
        
    }).catch(err=>{
            console.log(err)
    })
  }

  const setImage=()=>{
    
     product.map(product=>{
        const imageUrl =product
        ? `${API}/product/photo/${product._id}`
        : `https://images.unsplash.com/photo-1557821552-17105176677c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80`
             setProductImage(imageUrl)
    })
     
    
  }
    
  useEffect(()=>{
      filterData(name)
      setImage()
   
  })

    return (
        <article class="  overflow-hidden rounded-lg shadow-lg">

            <img alt="Placeholder" class=" object-contain h-48 w-auto md:object-scale-down "
             src={productImage} />
        
        </article>
    )
}


