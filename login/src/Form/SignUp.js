import React, { useState,useEffect } from 'react';
import  Modal  from './componenets/Modal';
import { GlobalStyle } from './globalStyles';





function SignUp() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };


  useEffect(()=>{
openModal()
  },[])

  return (
    <>
      
        <div className="flex justify-center ">
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <GlobalStyle />
        </div>
        
    </>
  );
}

export default SignUp;