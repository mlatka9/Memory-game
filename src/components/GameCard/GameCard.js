import { CardWrapper } from './GameCard.styles';
import { fontAwesomeMap } from 'assets/FontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GameCard = ({ id, value, status, handleGuess, iconType = 'numbers' }) => {
  let cardValue;
  if (status === 'isGuessed' || status === 'isCurrent') {
    switch (iconType) {
      case 'icons': {
        cardValue = <FontAwesomeIcon icon={fontAwesomeMap[value]} />;
        break;
      }
      default: {
        cardValue = value;
        break;
      }
    }
  }

  return (
    <CardWrapper status={status} onClick={() => handleGuess(id)}>
      {cardValue}
    </CardWrapper>
  );
};

export default GameCard;
