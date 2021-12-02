import React, { useState, useContext } from 'react';

const ModalContext = React.createContext({});

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return <ModalContext.Provider value={{ isOpen, handleOpenModal, handleCloseModal }}>{children}</ModalContext.Provider>;
};

const useModal = () => {
  const context = useContext(ModalContext);
  if (!ModalContext) {
    throw new Error('Cannot use hook useModal outside provider');
  }

  return context;
};

export default useModal;
