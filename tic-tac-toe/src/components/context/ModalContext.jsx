// import { createContext } from "react";
// import { useModal } from "../hooks/useModal";
// import ModalTemplate from "../Modal/ModalTemplate";

//  export const ModalContext = createContext({})

// export const ModalContextProvider = ({children}) =>{
//    const {modal, modalContent, handleModal}  = useModal();
  
//     return(

//         <ModalContext.Provider value={{modal, modalContent, handleModal}}>
// <ModalTemplate/>
// {children}
//         </ModalContext.Provider>
//     );
// }

import { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState(null);

  const handleModal = (content) => {
    setModalContent(content);
  };

  return (
    <ModalContext.Provider value={{ handleModal }}>
      {children}
      {modalContent && (
        <div className="modal">
          {modalContent}
          <button onClick={() => setModalContent(null)}>Close</button>
        </div>
      )}
    </ModalContext.Provider>
  );
};
