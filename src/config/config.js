import Phaser from 'phaser';

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
};