import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalWindow } from './Modal.styled';


const modalRoot = document.getElementById('modal-root')

export  function Modal({ src, onClose }) {
  
  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = element => {
      if (element.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const instance = (
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        <img src={src} alt="" />
      </ModalWindow>
    </Overlay>
  );

  return createPortal(instance, modalRoot);
}