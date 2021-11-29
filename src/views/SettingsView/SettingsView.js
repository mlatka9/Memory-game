import styled from 'styled-components';
import ViewWrapper from 'components/ViewWrapper/ViewWrapper';
import Button from 'components/Button/Button';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  h1 {
    font-size: 40;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 70px;
  }
  p {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.grey};
    font-weight: 700;
    margin: 0;
    margin-bottom: 16px;
  }
  button {
    margin-bottom: 33px;
  }
`;

const ButtonsRow = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  ${Button} {
    width: 100%;
  }
`;

const SettingsViewWrapper = styled(ViewWrapper)`
  display: flex;
  flex-direction: column;
`;

const SettingsView = ({ settings, handleSettingChange, toggleIsDuringGame }) => {
  const { theme, playersNumber, gridSize } = settings;

  return (
    <Wrapper>
      <h1>memory</h1>
      <SettingsViewWrapper>
        <p>Select Theme</p>
        <ButtonsRow>
          <Button selected={theme === 'numbers'} onClick={() => handleSettingChange('theme', 'numbers')}>
            numbers
          </Button>
          <Button selected={theme === 'icons'} onClick={() => handleSettingChange('theme', 'icons')}>
            icons
          </Button>
        </ButtonsRow>
        <p>Numbers of Players</p>
        <ButtonsRow>
          <Button selected={playersNumber === 1} onClick={() => handleSettingChange('playersNumber', 1)}>
            1
          </Button>
          <Button selected={playersNumber === 2} onClick={() => handleSettingChange('playersNumber', 2)}>
            2
          </Button>
          <Button selected={playersNumber === 3} onClick={() => handleSettingChange('playersNumber', 3)}>
            3
          </Button>
          <Button selected={playersNumber === 4} onClick={() => handleSettingChange('playersNumber', 4)}>
            4
          </Button>
        </ButtonsRow>
        <p>Grid Size</p>
        <ButtonsRow>
          <Button selected={gridSize === 4} onClick={() => handleSettingChange('gridSize', 4)}>
            4x4
          </Button>
          <Button selected={gridSize === 6} onClick={() => handleSettingChange('gridSize', 6)}>
            6x6
          </Button>
        </ButtonsRow>
        <ButtonsRow>
          <Button isDistinguish onClick={toggleIsDuringGame}>
            Start Game
          </Button>
        </ButtonsRow>
      </SettingsViewWrapper>
    </Wrapper>
  );
};

export default SettingsView;
