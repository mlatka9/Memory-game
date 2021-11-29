import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme, isCurrentUser }) => (isCurrentUser ? theme.colors.orange : theme.colors.veryLightBlue)};
  transition: background-color 200ms;
  flex-basis: 260px;
  height: 72px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  position: relative;
  span:first-of-type {
    font-size: 18px;
    font-weight: bold;
    color: ${({ theme, isCurrentUser }) => (isCurrentUser ? theme.colors.white : theme.colors.grey)};
  }
  span:last-of-type {
    color: ${({ theme, isCurrentUser }) => (isCurrentUser ? theme.colors.white : theme.colors.darkGrey)};
    font-size: 32px;
    font-weight: bold;
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
  }
`;

const StatCard = ({ title, value, isCurrentUser }) => {
  return (
    <Wrapper isCurrentUser={isCurrentUser}>
      <span>{title}</span>
      <span>{value}</span>
    </Wrapper>
  );
};

export default StatCard;
