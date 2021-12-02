import Button from 'components/Button/Button';
import React from 'react';
import { Wrapper } from './Header.styles';

const Header = React.memo(({ toggleIsDuringGame, restartCurrentGame, toggleMenu }) => {
  return (
    <Wrapper>
      <span>memory</span>
      <Button isDistinguish onClick={restartCurrentGame}>
        Restart
      </Button>

      <Button hasDarkFont onClick={toggleIsDuringGame}>
        New Game
      </Button>
      <Button isDistinguish onClick={toggleMenu}>
        Menu
      </Button>
    </Wrapper>
  );
});

export default Header;
