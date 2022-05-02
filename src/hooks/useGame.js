import { useState, useEffect, useRef, useCallback } from 'react';
import { generateRandomBoard, setupPlayers } from 'helpers';
import useModal from './useModal';

const useGame = ({ settings, toggleIsDuringGame }) => {
  const [board, setBoard] = useState(generateRandomBoard(settings.gridSize));
  const [previousCardId, setPreviousCardId] = useState(null);
  const [isBoardBlocked, setBoardBlock] = useState(false);
  const [playersData, setPlayersData] = useState(setupPlayers(settings.playersNumber));
  let ref = useRef(null);
  const { handleOpenModal } = useModal();

  
  const handleRestartGame = () => {
    setBoard(generateRandomBoard(settings.gridSize));
    setPreviousCardId(null);
    setBoardBlock(false);
    setPlayersData(setupPlayers(settings.playersNumber));
  };

  useEffect(() => {
    return () => {
      clearTimeout(ref.current);
    };
  }, []);

  useEffect(() => {
    const isEveryCardGuessed = board.every((card) => card.status === 'isGuessed');
    if (isEveryCardGuessed) {
      handleOpenModal();
    }
  }, [board, toggleIsDuringGame, handleOpenModal]);

  const handleUpdatePlayerMoves = (isGetPoint) => {
    setPlayersData((prev) => ({
      ...prev,
      currentPlayer: isGetPoint ? prev.currentPlayer : (prev.currentPlayer + 1) % prev.players.length,
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

  const handlePair = useCallback(
    (currentGuessedId) => {
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
    },
    [board, previousCardId]
  );

  const hightlightCard = useCallback(
    (id) => {
      setBoard([...board.slice(0, id), { ...board[id], status: 'isCurrent' }, ...board.slice(id + 1)]);
    },
    [board]
  );

  const handleGuess = useCallback(
    (id) => {
      if (isBoardBlocked) return;
      if (board[id].status === 'isGuessed') return;
      if (previousCardId === null) {
        setPreviousCardId(id);
      } else {
        setBoardBlock(true);
        ref.current = setTimeout(() => handlePair(id), 800);
        setPreviousCardId(null);
      }
      hightlightCard(id);
    },
    [board, handlePair, hightlightCard, isBoardBlocked, previousCardId]
  );

  return { board, handleGuess, playersData, handleRestartGame };
};

export default useGame;
