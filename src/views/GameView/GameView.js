import Header from 'components/Header/Header';
import StatsPanel from 'components/StatsPanel/StatsPanel';
import Board from 'components/Board/Board';
import useGame from 'hooks/useGame';
import Modal from 'components/Modal/Modal';
import useModal from 'hooks/useModal';
import ResultsView from 'components/ResultsView/ResultsView';
import useTimer from 'hooks/useTimer';
import { Wrapper } from './GameView.styles';
import { useState, useEffect } from 'react';
import MenuView from 'components/MenuView/MenuView';

const GameView = ({ toggleIsDuringGame, settings }) => {
  const { board, handleGuess, playersData, handleRestartGame } = useGame({ settings, toggleIsDuringGame });
  const { isOpen, handleCloseModal } = useModal();
  const { timer, stopTimer, resumeTimer, resetTimer } = useTimer(playersData.players.length === 1);

  const [menuIsOpen, setIsMenuOpen] = useState(false);

  const restartCurrentGame = () => {
    if (playersData.players.length === 1) {
      resetTimer();
    }
    handleRestartGame();
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (menuIsOpen) {
      stopTimer();
    }
  }, [menuIsOpen, stopTimer]);

  return (
    <Wrapper>
      <Header toggleIsDuringGame={toggleIsDuringGame} restartCurrentGame={restartCurrentGame} toggleMenu={toggleMenu} />
      <Board settings={settings} board={board} handleGuess={handleGuess} />
      <StatsPanel players={playersData.players} currentPlayer={playersData.currentPlayer} timer={timer} />
      {isOpen ? (
        <Modal>
          <ResultsView
            toggleIsDuringGame={toggleIsDuringGame}
            playersData={playersData}
            handleCloseModal={handleCloseModal}
            handleRestartGame={handleRestartGame}
            handleStopTimer={stopTimer}
            handleResumeTimer={resumeTimer}
            handleResetTimer={resetTimer}
            timer={timer}
          />
        </Modal>
      ) : null}
      {menuIsOpen ? (
        <Modal>
          <MenuView
            toggleIsDuringGame={toggleIsDuringGame}
            toggleMenu={toggleMenu}
            restartCurrentGame={restartCurrentGame}
            resumeTimer={resumeTimer}
          />
        </Modal>
      ) : null}
    </Wrapper>
  );
};

export default GameView;
