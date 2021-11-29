import styled from 'styled-components';
import StatCard from 'components/StatCard/StatCard';
import React, { useRef, useEffect } from 'react';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
`;

const formatTimer = (timeInSeconds) => {
  const munutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds - munutes * 60;
  return `${munutes}:${seconds < 10 ? '0' + seconds : seconds}`;
};

const StatsPanel = React.memo(({ players, currentPlayer, timer, setTimer }) => {
  console.log('stats panel');
  let id = useRef(null);

  useEffect(() => {
    if (players.length > 1) return;

    id.current = setInterval(() => {
      console.log('tik tak');
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(id.current);
  }, [setTimer, players.length]);

  if (players.length === 1) {
    return (
      <Wrapper>
        <StatCard title="Time" value={formatTimer(timer)} />
        <StatCard title="Moves" value={players[currentPlayer].moves} />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {players.map((player) => (
        <StatCard
          key={player.id}
          title={`Player ${player.id}`}
          value={player.points}
          isCurrentUser={player.id === currentPlayer}
        />
      ))}
    </Wrapper>
  );
});

export default StatsPanel;
