import React, { useState, useEffect } from "react";
import { Link,Redirect } from "react-router-dom";
import { isAuthenticated } from "../Form/FormBackend";
import { getProducts,deleteProduct  } from "./helper/adminapicall";

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    const [success,setSuccess]=useState(false)
  const { user, token } = isAuthenticated();

  const preload = () => {
    getProducts().then(data => {
      if (data?.error) {
        console.log(data.error);
        setSuccess(false)
      } else {
        setProducts(data);
        setSuccess(true)
      }
    });
  };

  useEffect(() => {
    preload();
    success&&(<Redirect to="/Menu" />)

    
  }, [products]);

  const deleteThisProduct = productId => {
    deleteProduct(productId, user._id, token).then(data => {
      if (data?.error) {
        console.log("error ---",data.error);
      } else {
            setSuccess(true)
        }
    });
  };
  
  return (
    <section class="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
    <header class="flex items-center justify-between">
      <h2 style={{backgroundColor:"#050B21"}} class="text-lg font-medium text-white text-center">categories</h2>
      
    </header>
    
    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
    {products.map((product, index) => {
            return (
            <div>
                <li key={index} x-for="item in items">
        <div  class="hover:bg-light-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200">
          <dl class="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
            <div>
              <dt class="sr-only">Title</dt>
              <dd class=" leading-6 font-medium text-black">
               {product.name}
              </dd>
            </div>
            <div class="text-center md:text-right mt-4 md:flex md:justify-end">
                  <button
                   style={{backgroundColor:"#050B21"}}
                   onClick={() => {
                    deleteThisProduct(product._id)
                  }}
                  className="hover:text-black block w-full md:inline-block md:w-auto px-4 py-3 md:py-2  text-white rounded-lg font-semibold text-sm md:ml-2 md:order-2">Delete
                      Product</button>
                  
                      <Link
                  onClick={()=>{
                      return(
                          <Redirect  to={`/admin/product/update/${product._id}`} />
                      )
                  }}
                  className="hover:text-black block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
                    md:mt-0 md:order-1">Update {product.name}</Link>       
                </div>
           
          </dl>
        </div>
      </li>
            </div>
            );
          })}
      <li class="hover:shadow-lg flex rounded-lg">
        <Link style={{backgroundColor:"#050B21"}} to="/Admin/Create/Product" class="hover:border-transparent hover:shadow-xs w-full flex items-center justify-center rounded-lg border-2 border-dashed border-gray-200 text-sm font-medium py-4 text-white">
         Create New Product
        </Link>
      </li>
    </ul>
    
  </section>
  );
};

export default ManageProduct;

