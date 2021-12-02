import StatCard from 'components/StatCard/StatCard';

import Button from 'components/Button/Button';
import { useEffect } from 'react';
import { formatTimer } from 'helpers/index.js';
import { ResultsWrapper } from './ResultsView.styles';

const ResultsView = ({
  toggleIsDuringGame,
  playersData: { players },
  handleCloseModal,
  handleRestartGame,
  handleStopTimer,
  timer,
  handleResumeTimer,
  handleResetTimer,
}) => {
  const handleSetupNewGame = () => {
    toggleIsDuringGame();
    handleCloseModal();
  };

  const handleResetGame = () => {
    handleRestartGame();
    handleCloseModal();
    if (players.length === 1) {
      handleResetTimer();
      handleResumeTimer();
    }
  };

  const sotedPlayers = [...players].sort((a, b) => a.points - b.points).reverse();
  const bestScore = sotedPlayers[0].points;
  const winnersId = players.filter((player) => player.points === bestScore).map((player) => player.id);

  useEffect(() => {
    if (players.length === 1) {
      handleStopTimer();
    }
  }, [players.length, handleStopTimer]);

  return (
    <ResultsWrapper>
      {players.length > 1 ? (
        <>
          <h2>{winnersId.length > 1 ? 'Its a tie!' : `Player ${winnersId[0] + 1} Wins!`}</h2>
          <p>Game over! Here are the results...</p>
          {sotedPlayers.map((player) => (
            <StatCard
              key={player.id}
              title={`Player ${player.id + 1} ${winnersId.includes(player.id) ? '(Winner)' : ''}`}
              value={player.points}
              isWinner={winnersId.includes(player.id)}
            />
          ))}
        </>
      ) : (
        <>
          <h2>You did it!</h2>
          <p>Game over! Here's how you got on...</p>
          <StatCard title="Time Elapsed" value={formatTimer(timer)} />
          <StatCard title="Moves Taken" value={players[0].moves} />
        </>
      )}

      <div>
        <Button isDistinguish onClick={handleResetGame}>
          Restart
        </Button>
        <Button hasDarkFont onClick={handleSetupNewGame}>
          Setup New Game
        </Button>
      </div>
    </ResultsWrapper>
  );
};

export default ResultsView;
