import styled from 'styled-components';
import GameCard from 'components/GameCard/GameCard';
import React from 'react';

const BoardWrapper = styled.div`
  display: grid;
  width: 600px;
  height: 600px;
  margin: 0 auto;
  padding: 30px;
  grid-template-columns: repeat(${({ size }) => size}, 1fr);
  grid-template-rows: repeat(${({ size }) => size}, 1fr);
  justify-content: center;
  gap: 10px;
  @media (max-width: 800px) {
    width: 500px;
    height: 500px;
    gap: 5px;
    padding: 0;
  }
  @media (max-width: 600px) {
    width: calc(100vw - 40px);
    height: calc(100vw - 40px);
  }
`;

const Board = React.memo(({ settings, board, handleGuess }) => {
  console.log('board');
  return (
    <BoardWrapper size={settings.gridSize}>
      {board.map((card) => (
        <GameCard
          iconType={settings.theme}
          key={card.id}
          id={card.id}
          value={card.value}
          status={card.status}
          handleGuess={handleGuess}
        />
      ))}
    </BoardWrapper>
  );
});

export default Board;
