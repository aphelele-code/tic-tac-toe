

import React, {useContext} from 'react'
import ReactDOM from 'react-dom'
import { ModalContext } from '../context/ModalContext'
import { ModalContainer } from './Modal.styled'
import { ModalBackdrop } from './Modal.styled'

const ModalTemplate = () => {
  const { modalContent, modal} = useContext(ModalContext)
 
  if(modal){
  return  ReactDOM.createPortal(
    
      <ModalBackdrop>
      <ModalContainer>
{modalContent}
      </ModalContainer>
      </ModalBackdrop>,
    document.getElementById('modal-root')
   ) ;
  
  }
return null;
}

export default ModalTemplate
