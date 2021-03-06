import styled from 'styled-components';
import StatCard from 'components/StatCard/StatCard';
import React, { useState, useEffect } from 'react';
import { formatTimer } from 'helpers/index.js';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
`;

const StatsPanel = React.memo(({ players, currentPlayer, timer }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const toggleIsMobile = () => {
      if (window.innerWidth < 600) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener('resize', toggleIsMobile);

    return () => document.removeEventListener('resize', toggleIsMobile);
  }, []);

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
          title={isMobile ? `P ${player.id + 1}` : `Player ${player.id + 1}`}
          value={player.points}
          isCurrentUser={player.id === currentPlayer}
        />
      ))}
    </Wrapper>
  );
});

export default StatsPanel;
