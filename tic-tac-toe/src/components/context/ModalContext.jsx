
import { createContext, useState } from 'react';
import ModalTemplate from '../Modal/ModalTemplate';
export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState(null);
  const [modal, setModal] = useState(false);

  const handleModal = (content) => {
  
setModalContent(content);
    setModal(true)
  
    
  };

  const closeModal = () => {
    
    setModalContent(null)
    setModal(false)
  }

   return (
    <ModalContext.Provider value={{ handleModal, closeModal, modal, modalContent }}>
      {children}
      {modal && modalContent && <ModalTemplate>{modalContent}</ModalTemplate>}
    </ModalContext.Provider>
  );
};
