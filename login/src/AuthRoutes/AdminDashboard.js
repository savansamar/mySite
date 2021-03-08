import React from 'react'
import { Link } from 'react-router-dom'
function AdminDashboard() {
    return (
       <>
         
   
    <div style={{backgroundColor:"white"}} class="  font-sans">
  <div class="relative px-4 min-h-screen flex-row md:flex md:items-center md:justify-center">
    
    <div class="bg-white border-2 border-black rounded-lg md:max-w-md md:mx-auto p-4  mb-4 mx-4 ">
      <div class="md:flex items-center">
       
        <div class="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
          <p class="font-bold">Create Category</p>
          <p class="text-sm text-gray-700 mt-1">
              create category for your product.click below...
          </p>
        </div>
      </div>
      <div class="text-center md:text-right mt-4 md:flex md:justify-end">
        <Link
         style={{backgroundColor:"#050B21"}}
         className="hover:text-white w-full md:inline-block md:w-auto px-4 py-3 md:py-2 text-white rounded-lg font-semibold text-sm md:ml-2 md:order-2"
          to="/Admin/Create/Category">Create Category</Link>
        
      </div>
    </div>

{/*product */}
<div class="bg-white border-2 border-black rounded-lg md:max-w-md md:mx-auto p-4  mb-4 mx-4 ">
      <div class="md:flex items-center">
       
        <div class="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
          <p class="font-bold">Manage Catgeory</p>
          <p class="text-sm text-gray-700 mt-1">
             Manage catgeory for your product. click below...
          </p>
        </div>
      </div>
      <div class="text-center md:text-right mt-4 md:flex md:justify-end">
           <Link 
         style={{backgroundColor:"#050B21"}}
         className="hover:text-white w-full md:inline-block md:w-auto px-4 py-3 md:py-2 text-white rounded-lg font-semibold text-sm md:ml-2 md:order-2"
           
           to="/Admin/Manage/Category" >Manage category</Link>
       
      </div>
    </div>
{/* */}
{/*Mange */}
<div class="bg-white border-2 border-black rounded-lg md:max-w-md md:mx-auto p-4 mb-4 mx-4 ">
      <div class="md:flex items-center">
        
        <div class="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
          <p class="font-bold">Create Product</p>
          <p class="text-sm text-gray-700 mt-1">
          create product for your sale. click below...
          </p>
        </div>
      </div>
      <div class="text-center md:text-right mt-4 md:flex md:justify-end">
           <Link 
            style={{backgroundColor:"#050B21"}}
            className="hover:text-white w-full md:inline-block md:w-auto px-4 py-3 md:py-2 text-white rounded-lg font-semibold text-sm md:ml-2 md:order-2"
           
           to="/Admin/Create/Product" >Create Products</Link>
       
      </div>
    </div>
{/* */}
<div class="bg-white border-2 border-black rounded-lg md:max-w-md md:mx-auto p-4 mb-4 mx-4 ">
      <div class="md:flex items-center">
        
        <div class="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
          <p class="font-bold">Manage Product</p>
          <p class="text-sm text-gray-700 mt-1">
          Manage product for sale.click below...
          </p>
        </div>
      </div>
      <div class="text-center md:text-right mt-4 md:flex md:justify-end">
      <Link 
       style={{backgroundColor:"#050B21"}}
       className="hover:text-white w-full md:inline-block md:w-auto px-4 py-3 md:py-2 text-white rounded-lg font-semibold text-sm md:ml-2 md:order-2"
            to="/Admin/Manage/Product">
            Manage Product
            </Link>
        
      </div>
    </div>
    

  </div>
</div>
  

       </>
    )
}

export default AdminDashboard
