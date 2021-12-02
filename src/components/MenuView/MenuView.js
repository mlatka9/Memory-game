import styled from 'styled-components';
import Button from 'components/Button/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  button {
    margin: 8px 0;
    padding: 17px;
  }
`;

const MenuView = ({ toggleIsDuringGame, toggleMenu, restartCurrentGame }) => {
  const handleResetGame = () => {
    restartCurrentGame();
    toggleMenu();
  };
  return (
    <Wrapper>
      <Button isDistinguish onClick={handleResetGame}>
        Restart
      </Button>
      <Button hasDarkFont onClick={toggleIsDuringGame}>
        New Game
      </Button>
      <Button hasDarkFont onClick={toggleMenu}>
        Resume Game
      </Button>
    </Wrapper>
  );
};

export default MenuView;
