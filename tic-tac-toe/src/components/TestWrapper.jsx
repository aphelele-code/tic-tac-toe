import { useContext } from 'react';
import { ModalContext } from '../components/context/ModalContext';
import { Test } from '../App'; 

export const TestWrapper = () => {
  const { handleModal } = useContext(ModalContext);
  return <Test handleModal={handleModal} />;
};
