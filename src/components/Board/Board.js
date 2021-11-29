import styled from 'styled-components';
import GameCard from 'components/GameCard/GameCard';

const BoardWrapper = styled.div`
  display: grid;
  width: 600px;
  height: 600px;
  margin: 0 auto;
  grid-template-columns: repeat(${({ size }) => size}, 1fr);
  grid-template-rows: repeat(${({ size }) => size}, 1fr);
  justify-content: center;
  gap: 10px;
`;
const Board = ({ settings, board, handleGuess }) => {
  console.log('board');
  return (
    <BoardWrapper size={settings.gridSize}>
      {board.map((card) => (
        <GameCard key={card.id} id={card.id} value={card.value} status={card.status} handleGuess={handleGuess} />
      ))}
    </BoardWrapper>
  );
};

export default Board;
