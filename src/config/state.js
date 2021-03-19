export const state = {
  speed: 240,
  ups: 380,
  score: JSON.parse(localStorage.getItem('game.score')) || 0,
  called: JSON.parse(localStorage.getItem('game.posted')) || false,
  playerName: JSON.parse(localStorage.getItem('game.player')) || 'player1',
  board: JSON.parse(localStorage.getItem('game.board')) || [],
};

export const saveScore = () => {
  localStorage.setItem('game.score', JSON.stringify(state.score));
};

export const setPlayer = () => {
  localStorage.setItem('game.player', JSON.stringify(state.playerName));
};

export const setCalled = () => {
  localStorage.setItem('game.called', JSON.stringify(state.called));
};