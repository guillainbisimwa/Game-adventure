import Phaser from 'phaser';
import UIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin';

import BestScores from '../scenes/bestScores';
import GameOver from '../scenes/gameOver';
import Help from '../scenes/help';
import LevelOne from '../scenes/levelOne';
import Level from '../scenes/levelScene';
import LevelTwo from '../scenes/levelTwo';
import Main from '../scenes/main';
import Menu from '../scenes/menu';
import Preload from '../scenes/preloadScene';

export default {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  fps: { target: 60 },
  backgroundColor: '333',
  plugins: {
    scene: [{
      key: 'rexUI',
      plugin: UIPlugin,
      mapping: 'rexUI',
    },
    ],
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 800 },
      enableBody: true,
    },
  },
  parent: 'bg',
  dom: {
    createContainer: true,
  },
  scene: [
    Preload,
    Main,
    Menu,
    BestScores,
    Help,
    Level,
    LevelOne,
    LevelTwo,
    GameOver,
  ],
};