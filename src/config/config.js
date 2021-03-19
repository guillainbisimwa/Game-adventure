import Phaser from 'phaser';
import Level from '../scenes/levelScene';
import Menu from '../scenes/menu';
import Preload from '../scenes/preloadScene';

export default {
  type: Phaser.AUTO,
  parent: 'container',
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 300 },
      enableBody: true,
    },
  },
  scene: [
    Preload,
    Menu,
    Level,
  ],
};