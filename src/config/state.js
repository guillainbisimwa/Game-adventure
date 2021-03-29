const state = {
  speed: 240,
  ups: 380,
  score: JSON.parse(localStorage.getItem('game.score')) || 0,
  called: JSON.parse(localStorage.getItem('game.posted')) || false,
  playerName: JSON.parse(localStorage.getItem('game.player')) || 'player1',
  board: JSON.parse(localStorage.getItem('game.board')) || [],
};

export default state;