import { Wrapper, SettingsViewWrapper, ButtonsRow } from './SettingsView.styles';
import Button from 'components/Button/Button';

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
