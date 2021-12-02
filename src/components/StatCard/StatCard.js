import { Wrapper } from './StatCard.styles';

const StatCard = ({ title, value, isCurrentUser, isWinner }) => {
  return (
    <Wrapper isCurrentUser={isCurrentUser} isWinner={isWinner}>
      <span>{title}</span>
      <span>{value}</span>
    </Wrapper>
  );
};

export default StatCard;
