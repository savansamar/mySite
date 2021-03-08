import React, { useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import FormSignIn from '../FormSignIn';
import { TweenMax } from "gsap";

const Background = styled.div`
  
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;




 

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  
`;

 const ModalSignIn = ({ showModal, setShowModal }) => {
  const modalRef = useRef();
  const move = useRef();


  
  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      TweenMax.from(move.current, {duration: 2, y: 300, opacity: 0, scale: 0.5});
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
           
          <div ref={move} className=" p-16 space-x-8">
            <div showModal={showModal} className="">
           <FormSignIn />
            </div>
            <CloseModalButton
              style={{background:"white"}}
      className=" mb-16"
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              /> 
          </div>
          
        </Background>
      ) : null}
      
    </>
  );
};

export default ModalSignIn