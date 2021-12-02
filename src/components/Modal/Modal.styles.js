import styled, { keyframes } from 'styled-components';

const slide = keyframes`
  0%{
    transform: translate(-50%, calc(-50% - 80px));
  }
   100%{
    transform: translate(-50%, calc(-50%));
  }
`;

const backgroundFade = keyframes`
  0%{
    opacity: 0;
  }
  50%{
    opacity: 1;
  }
   100%{
    opacity: 1;
  }
`;

export const ModalBackground = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${backgroundFade} linear 1s;
`;

export const ModalWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.white};
  padding: 50px 60px;
  border-radius: 20px;
  width: 90%;
  max-width: 650px;
  animation: ${slide} 1s;
`;
