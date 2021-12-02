import { ModalWrapper, ModalBackground } from './Modal.styles';
import ReactDOM from 'react-dom';

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <ModalBackground>
      <ModalWrapper>{children}</ModalWrapper>
    </ModalBackground>,
    document.getElementById('modal-container')
  );
};

export default Modal;
