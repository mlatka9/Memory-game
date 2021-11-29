import GlobalStyles from 'styles/GlobalStyles';
import theme from 'styles/theme';
import { ThemeProvider } from 'styled-components';
import SettingsView from 'views/SettingsView/SettingsView';
import GameView from 'views/GameView/GameView';
import { useState } from 'react';

function App() {
  const [settings, setSettings] = useState({ theme: 'numbers', playersNumber: 1, gridSize: 4 });
  const [isDurringGame, setIsDurringGame] = useState(false);

  console.log('app');

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
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {isDurringGame ? (
        <GameView toggleIsDuringGame={toggleIsDuringGame} settings={settings} />
      ) : (
        <SettingsView handleSettingChange={handleSettingChange} settings={settings} toggleIsDuringGame={toggleIsDuringGame} />
      )}
    </ThemeProvider>
  );
}

export default App;
