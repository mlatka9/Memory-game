import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, status }) => {
    if (status === 'isGuessed') return theme.colors.lightGrey;
    if (status === 'isCurrent') return theme.colors.orange;
    return theme.colors.darkGrey;
  }};
  border-radius: 50%;
  width: 100%;
  height: 100%;
  border: none;
  font-size: 56px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: background-color 150ms;
  &:hover {
    background-color: ${({ theme, status }) => !status && theme.colors.blue};
  }
`;

const GameCard = ({ id, value, status, handleGuess }) => {
  return (
    <CardWrapper status={status} onClick={() => handleGuess(id)}>
      {status === 'isGuessed' || status === 'isCurrent' ? value : null}
    </CardWrapper>
  );
};

export default GameCard;
