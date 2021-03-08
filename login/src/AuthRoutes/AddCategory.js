import React ,{useState} from 'react'
import { Link, Redirect } from 'react-router-dom'
import { isAuthenticated } from '../Form/FormBackend'
import { createCategory } from './helper/adminapicall'
function AddCategory() {
    const [name,setName]=useState("")
    const [error,setError]=useState(false)
    const [success,setSuccess]=useState(false)
    const {user,token}=isAuthenticated();

    const handleChange=event=>{
        setError("");
    setName(event.target.value);
    }
    const onSubmit = event => {
        event.preventDefault();
        setError("");
        setSuccess(false);
    
        //backend request fired
        createCategory(user._id, token, { name }).then(data => {
          if (data.error) {
            setError(true);
          } else {
            setError("");
            setSuccess(true);
            setName("");
          }
        });
      };
      const successMessage = () => {
        if (success) {
          return (<>
          <h4>crated SuccessFully</h4>
        
          </>);
        }
      };
    
      const warningMessage = () => {
        if (error) {
          return <h4 className="text-success">Failed to create category</h4>;
        }
      };
    return (
       <>
       <div class=" bg-white text-gray-900 font-sans">
  <div class="relative  px-4 min-h-screen md:flex md:items-center md:justify-center">
    <div style={{backgroundColor:"#050B21"}} class=" border-2 border-black rounded-lg  w-96  md:mx-auto p-4  mx-4 md:relative">
      <div class="">

      <form>
      <div  className="form-group">
        <p className="text-white ">Enter the category</p>
        <input

          type="text"
          className="form-control"
          onChange={handleChange}
          value={name}
          autoFocus
          required
          placeholder="For Ex. Summer"
        />
       <button onClick={onSubmit} class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
          md:mt-0 md:order-1">create</button>
    
      </div>
    </form>
        
    {successMessage()}
          {warningMessage()}
      </div>
    </div>
  </div>
</div>
       </>
    )
}

export default AddCategory
