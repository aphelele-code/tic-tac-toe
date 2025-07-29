
import { createContext, useState, useCallback } from 'react';
import ModalTemplate from '../Modal/ModalTemplate';
export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState(null);
  const [modal, setModal] = useState(false);

   const handleModal = useCallback((content) => {

      setModalContent(content);
      setModal(!!content);

  }, []);

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
