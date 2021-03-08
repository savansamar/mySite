import React, { useState,useEffect } from 'react';
import  ModalSignIn  from './componenets/ModalSignIn';
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
      <div className="flex justify-center">
        
        <ModalSignIn showModal={showModal} setShowModal={setShowModal} />
        <GlobalStyle />
      </div>
    </>
  );
}

export default SignUp;