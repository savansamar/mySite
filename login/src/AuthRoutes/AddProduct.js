import React,{useState,useEffect} from 'react'
import { Redirect } from 'react-router';
import { isAuthenticated } from "../Form/FormBackend";
import { createaProduct, getCategories } from './helper/adminapicall';
function AddProduct() {

  const { user, token } = isAuthenticated();

  const [values, setValues] = useState({
    name:"",
        description:"",
        prize:"",
        stock:"",
        photo:"",
        categories:[],
        category:"",
        loading:true,
        error:"",
        createdProduct:"",
        success:"",
        getRedirect:false,
        formData:""
  });

  const {
    name,
    description,
    price,
    stock,
    categories,
    category,
    loading,
    error,
    createdProduct,
    success,
    getRedirect,
    formData
  } = values;

  const preload = () => {
    getCategories().then(data => {
      if (data?.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, categories: data, formData: new FormData() });
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: false });
    createaProduct(user._id, token, formData).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: "",
          description: "",
          price: "",
          photo: "",
          stock: "",
          loading: false,
          success:true,
          createdProduct: data.name
        });
      }
    });
  };

  const handleChange = name => event => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const errorMessage=()=>(
    error&&(
      <div className="bg-red-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 rounded-full">{error} come s up</div>
    
    )
  )
  const successMessage = () => (
    <div
      className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 rounded-full"
      style={{ display: createdProduct ? "" : "none" }}
    >
      <h4>{createdProduct} created successfully</h4>
     
    </div>
  );
  const perf=()=>(

    setTimeout(()=>{
              setValues({...values,getRedirect:true})
    },1000)
    
  
  )
  
  
  const redirect=()=>(
    success && perf() &&getRedirect&&(<Redirect to="/Admin/Dashboard" />) || error  && perf() &&getRedirect&&(<Redirect to="/Admin/Create/Product" />)
  )
  


    return (
        
        <>
          <div class=" bg-white text-gray-900 font-sans">
          {successMessage()}
          {errorMessage()}
          {redirect()}
         
  <div class="relative  px-4 min-h-screen md:flex md:items-center md:justify-center">
    <div style={{backgroundColor:"#050B21"}} class=" border-2 border-black rounded-lg h-96 w-96 md:w-full mx-4">
      <div class="">

      <form className="w-48  mx-auto my-auto items-center">

      <span className="text-white">Post photo</span>
      <div className="form-group mb-2">

        <label >
          <input
          className="text-black"
          onChange={handleChange("photo")}
            type="file"
            name="photo"
            accept="image"
            placeholder="choose a file"
          />
        </label>
      </div>

      <div className="form-group w-64 md:w-96 mb-2">
      <input 
        onChange={handleChange("name")}
        name="photo"
        className="form-control"
        value={name}
        placeholder="Name" 
    />
      
      </div>

      <div className="form-group w-64 md:w-96 mb-2">
      <textarea 
        onChange={handleChange("description")}
        className="form-control"
        value={description}
        placeholder="Description" 
      />
      </div>

      <div className="form-group w-64 md:w-96 mb-2">
        <input
          onChange={handleChange("price")}
          type="number"
          className="form-control"
          placeholder="Price"
          value={price}
        />
      </div>

      <div className="form-group w-64 md:w-96 mb-2">
        <select
         onChange={handleChange("category")}
          className="form-control"
          placeholder="Category"
        >
          <option>Select</option>
          {categories &&
            categories.map((cate, index) => (
              <option key={index} value={cate._id}>
                {cate.name}
              </option>
            ))}
         
        </select>
      </div>
      <div className="form-group w-64 md:w-96 mb-2">
        <input
           onChange={handleChange("stock")}
          type="number"
          className="form-control"
          placeholder="Stock"
          value={stock}
        />
      </div>
     {loading ?(
        <button  onClick={onSubmit} class="bg-white block w-full md:inline-block md:w-auto px-4 py-3 md:py-2  text-blue-900 rounded-lg font-semibold text-sm md:ml-2 md:order-2">
            
        Create Product
       </button>
     ):(
      <button  class="bg-white block w-full md:inline-block md:w-auto px-4 py-3 md:py-2  text-blue-900 rounded-lg font-semibold text-sm md:ml-2 md:order-2">
            
      Create Product
     </button>
     )}
      
    </form>
     
        
      </div>
    </div>
    
  </div>
</div>
        </>
    )
}

export default AddProduct
