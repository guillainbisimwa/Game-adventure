import Phaser from 'phaser';
import GameOver from '../scenes/gameOver';
import Level from '../scenes/levelScene';
import Menu from '../scenes/menu';
import Preload from '../scenes/preloadScene';

export default {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  fps: { target: 60 },
  backgroundColor: '333',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 800 },
      enableBody: true,
    },
  },
  parent: 'form',
  dom: {
    createContainer: true,
  },
  scene: [
    Preload,
    Menu,
    Level,
    GameOver,
  ],
};