import React, { useState, useEffect } from "react";
import { Link,Redirect } from "react-router-dom";
import { isAuthenticated } from "../Form/FormBackend";
import { deleteCategory, getCategories } from "./helper/adminapicall";
const ManageCategories = () => {
  const [categories, setCategories] = useState([]);

  const { user, token } = isAuthenticated();

  const preload = () => {
    getCategories().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCategories(data);
      }
    });
  };


  const deleteThisCategory = categoryId => {
    deleteCategory(categoryId, user._id, token).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  return (
    <section class="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
    <header class="flex items-center justify-between">
      <h2 style={{backgroundColor:"#050B21"}} class="text-lg font-medium text-white text-center">categories</h2>
      
    </header>
    
    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
    {categories.length=== 0 ?(<div className="text-black font-bold ">no category is exist</div>):categories.map((category, index) => {
            return (
              <li x-for="item in items">
        <a href="item.url" class="hover:bg-light-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200">
          <dl class="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
            <div>
              <dt class="sr-only">Title</dt>
              <dd class=" leading-6 font-medium text-black">
               {category.name}
              </dd>
            </div>
            <div class="text-center md:text-right mt-4 md:flex md:justify-end">
                  <button
                   style={{backgroundColor:"#050B21"}}
                   onClick={() => {
                    deleteThisCategory(category._id)
                  }}
                  class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2  text-white rounded-lg font-semibold text-sm md:ml-2 md:order-2">Delete
                      category</button>
                  <button 
                  onClick={()=>{
                      return(
                          <Redirect to="/Admin/Dashboard" />
                      )
                  }}
                  class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
                    md:mt-0 md:order-1">AdminHome</button>
                </div>
           
          </dl>
        </a>
      </li>
            );
          })}
      <li class="hover:shadow-lg flex rounded-lg">
        <Link style={{backgroundColor:"#050B21"}} to="/Admin/Create/Category" class="hover:border-transparent hover:shadow-xs w-full flex items-center justify-center rounded-lg border-2 border-dashed border-gray-200 text-sm font-medium py-4 text-white">
         Create New Category
        </Link>
      </li>
    </ul>
  </section>
  );
};

export default ManageCategories;

