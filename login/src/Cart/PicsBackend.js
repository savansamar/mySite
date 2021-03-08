import React from "react";
import { API } from "../backendConnect";
const Pics = ({ product }) => {
  console.log(product)
  const imageurl = product
    ? `${API}/product/photo/${product._id}`
    : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;
  return (
    <article class=" overflow-hidden rounded-lg ">
     <img alt="Placeholder" class="object-contain rounded-lg h-48 mx-auto w-auto md:object-scale-down"

    src={imageurl} />
    </article>
   
   
   
    
  );
};

export default Pics