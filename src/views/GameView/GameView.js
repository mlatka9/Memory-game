import styled from 'styled-components';
import Header from 'components/Header/Header';
import { useState, useEffect, useRef } from 'react';
import StatsPanel from 'components/StatsPanel/StatsPanel';
import Board from 'components/Board/Board';

const Wrapper = styled.div`
  padding: 50px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

const generateRandomBoard = (size) => {
  let temp = [];
  for (let i = 0; i < (size * size) / 2; i++) {
    temp.push(i);
    temp.push(i);
  }
  shuffleArray(temp);

  return temp.map((value, id) => ({ id, value, status: null }));
};

const setupPlayers = (playersNumber) => {
  let players = [];
  for (let i = 0; i < playersNumber; i++) {
    players.push({ id: i, moves: 0, points: 0 });
  }
  return {
    currentPlayer: 0,
    players,
  };
};

const GameView = ({ toggleIsDuringGame, settings }) => {
  const [board, setBoard] = useState(generateRandomBoard(settings.gridSize));
  const [previousCardId, setPreviousCardId] = useState(null);
  const [isBoardBlocked, setBoardBlock] = useState(false);
  const [playersData, setPlayersData] = useState(setupPlayers(settings.playersNumber));
  const [timer, setTimer] = useState(0);
  let ref = useRef(null);

  console.log('game');

  useEffect(() => {
    return () => {
      clearTimeout(ref.current);
    };
  }, []);

  useEffect(() => {});

  useEffect(() => {
    const unmatchCards = board.filter((card) => !card.status);
    if (unmatchCards.length === 0) {
      console.log('game end');
      toggleIsDuringGame();
    }
  }, [board, toggleIsDuringGame]);

  const handleUpdatePlayerMoves = (isGetPoint) => {
    setPlayersData((prev) => ({
      ...prev,
      currentPlayer: (prev.currentPlayer + 1) % prev.players.length,
      players: [
        ...prev.players.slice(0, prev.currentPlayer),
        {
          ...prev.players[prev.currentPlayer],
          moves: prev.players[prev.currentPlayer].moves + 1,
          points: isGetPoint ? prev.players[prev.currentPlayer].points + 1 : prev.players[prev.currentPlayer].points,
        },
        ...prev.players.slice(prev.currentPlayer + 1),
      ],
    }));
  };

  const handlePair = (currentGuessedId) => {
    let firstIndex = Math.min(currentGuessedId, previousCardId);
    let secondIndex = Math.max(currentGuessedId, previousCardId);
    const isGetPoint = board[previousCardId].value === board[currentGuessedId].value;

    setBoard([
      ...board.slice(0, firstIndex),
      { ...board[firstIndex], status: isGetPoint ? 'isGuessed' : null },
      ...board.slice(firstIndex + 1, secondIndex),
      { ...board[secondIndex], status: isGetPoint ? 'isGuessed' : null },
      ...board.slice(secondIndex + 1),
    ]);

    setBoardBlock(false);
    handleUpdatePlayerMoves(isGetPoint);
  };

  const handleGuess = (id) => {
    if (isBoardBlocked) return;
    if (board[id].status === 'isGuessed') return;
    if (previousCardId === null) {
      setPreviousCardId(id);
    } else {
      setBoardBlock(true);
      ref.current = setTimeout(() => handlePair(id), 1000);
      setPreviousCardId(null);
    }
    hightlightCard(id);
  };

  const hightlightCard = (id) => {
    setBoard([...board.slice(0, id), { ...board[id], status: 'isCurrent' }, ...board.slice(id + 1)]);
  };

  return (
    <Wrapper>
      <Header toggleIsDuringGame={toggleIsDuringGame} />
      <Board settings={settings} board={board} handleGuess={handleGuess} />
      <StatsPanel players={playersData.players} currentPlayer={playersData.currentPlayer} timer={timer} setTimer={setTimer} />
    </Wrapper>
  );
};

export default GameView;
