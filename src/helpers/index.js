export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

export const generateRandomBoard = (size) => {
  let temp = [];
  for (let i = 0; i < (size * size) / 2; i++) {
    temp.push(i);
    temp.push(i);
  }
  shuffleArray(temp);

  return temp.map((value, id) => ({ id, value, status: null }));
};

export const setupPlayers = (playersNumber) => {
  let players = [];
  for (let i = 0; i < playersNumber; i++) {
    players.push({ id: i, moves: 0, points: 0 });
  }
  return {
    currentPlayer: 0,
    players,
  };
};

export const formatTimer = (timeInSeconds) => {
  const munutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds - munutes * 60;
  return `${munutes}:${seconds < 10 ? '0' + seconds : seconds}`;
};
