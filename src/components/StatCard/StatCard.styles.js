import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme, isCurrentUser, isWinner }) => {
    if (isCurrentUser) return theme.colors.orange;
    if (isWinner) return theme.colors.black;
    return theme.colors.veryLightBlue;
  }};
  transition: background-color 200ms;
  flex-basis: 260px;
  height: 72px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  position: relative;
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 80px;
    padding: 0 0 0 24px;
  }
  @media (max-width: 600px) {
    align-items: center;
    padding: 0;
  }
  span:first-of-type {
    font-size: 18px;
    font-weight: bold;
    color: ${({ theme, isCurrentUser, isWinner }) => {
      if (isCurrentUser || isWinner) return theme.colors.white;
      return theme.colors.grey;
    }};
    @media (max-width: 800px) {
      font-size: 15px;
    }
  }
  span:last-of-type {
    color: ${({ theme, isCurrentUser, isWinner }) => {
      if (isCurrentUser || isWinner) return theme.colors.white;
      return theme.colors.darkGrey;
    }};
    font-size: 32px;
    font-weight: bold;
    @media (max-width: 800px) {
      font-size: 24px;
    }
  }
  &::after {
    position: absolute;
    content: '';
    display: block;
    width: 45px;
    height: 45px;
    background-color: ${({ theme }) => theme.colors.orange};
    z-index: -10;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    opacity: ${({ isCurrentUser }) => (isCurrentUser ? 1 : 0)};
    transition: opacity 200ms;
  }

  &::before {
    ${({ isCurrentUser, theme }) =>
      isCurrentUser &&
      `
      position: absolute;
      content: 'CURRENT TURN';
      display:block;
      width: 100%;
      text-align: center;
      color: ${theme.colors.black};
      letter-spacing: 5px;
      z-index: 10;
      left: 0;
      bottom: -35px;
      font-size: 13px;
      font-weight: bold;
    `}
    @media (max-width: 800px) {
      content: none;
    }
  }
`;
