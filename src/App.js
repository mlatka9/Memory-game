import GlobalStyles from 'assets/styles/GlobalStyles';
import theme from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import SettingsView from 'views/SettingsView/SettingsView';
import GameView from 'views/GameView/GameView';
import { useState } from 'react';
import { ModalProvider } from 'hooks/useModal';
import 'assets/FontAwesome/index';

function App() {
  const [settings, setSettings] = useState({ theme: 'numbers', playersNumber: 1, gridSize: 4 });
  const [isDurringGame, setIsDurringGame] = useState(false);

  const handleSettingChange = (setting, newValue) => {
    setSettings({
      ...settings,
      [setting]: newValue,
    });
  };

  const toggleIsDuringGame = () => {
    setIsDurringGame((prev) => !prev);
  };

  return (
    <ModalProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {isDurringGame ? (
          <GameView toggleIsDuringGame={toggleIsDuringGame} settings={settings} />
        ) : (
          <SettingsView handleSettingChange={handleSettingChange} settings={settings} toggleIsDuringGame={toggleIsDuringGame} />
        )}
      </ThemeProvider>
    </ModalProvider>
  );
}

export default App;
