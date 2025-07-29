

import React, {useContext} from 'react'
import ReactDOM from 'react-dom'
import { ModalContext } from '../context/ModalContext'
import { ModalContainer } from './Modal.styled'
import { ModalBackdrop } from './Modal.styled'

const ModalTemplate = ({ children }) => {


  return ReactDOM.createPortal(
    <ModalBackdrop>
      <ModalContainer>
        {children}
       </ModalContainer>
    </ModalBackdrop>,
    document.getElementById('modal-root')
  );
};

export default ModalTemplate;

