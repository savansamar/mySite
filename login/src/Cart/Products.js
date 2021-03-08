import React,{useState,useEffect} from 'react'
import { getProductByName, getProducts } from '../AuthRoutes/helper/adminapicall';
import AllProducts from './Show';

function Products() {

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const [value,setValue]=useState('')
  const [fproduct,setFproduct]=useState([])


  const loadAllProduct = () => {
    getProducts().then(data => {
      if (data?.error) {
        setError(data.error);
      } else {
        setProducts(data);
       
      }
    });
  }; 
  const handleChange=event=>{
   setValue(event.target.value)
}

const filterData=(event)=>{
  event.preventDefault()
  getProductByName(value).then(data=>{
    if(data?.error){
      console.log(error)
    }else{
      setFproduct(data)
    }
  }).catch(error=>{
    console.log(error)
  })
}

  useEffect(() => {
    !value&&loadAllProduct();
    //loadAllProduct()
   setFproduct(0)

   
    
  },[value]);

    return (
        <>


<div  className="  container mt-auto  -my-12 mb-12 px-4 md:px-12  ">
<form className="relative mt-12 flex ">
    <svg width="20" height="20" fill="currentColor" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
    </svg>
    <input value={value} onChange={handleChange} class="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10" type="text" aria-label="Filter projects" placeholder="Filter projects" />
    
    <button style={{backgroundColor:"#050B21"}} onClick={filterData} className=" h-auto text-white rounded w-8 ">click</button>
  </form>
  
    <div class="flex flex-wrap -mx-1 lg:-mx-4 "> 
    
    {value&&fproduct?fproduct.map((data,index)=>{
       return(
        <AllProducts key={index} product={data} />
       )
   }):
    products.map((data,index)=>{
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

export default Products

/*


*/