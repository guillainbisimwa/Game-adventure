import Phaser from 'phaser';
import { state } from '../config/state';
import { platformer } from './platformer';

export default class Level extends Phaser.Scene {
  constructor() {
    super('Level');
  }

  create() {
    state.active = true;
    state.background = this.add.image(0, 0, 'background');

    state.background2 = this.add.image(0, 0, 'background2');

    state.background.setOrigin(0, 0);
    state.background2.setOrigin(0, 0);

    const gameWidth = parseFloat(state.background.getBounds().width);
    state.width = gameWidth;
    const windowWidth = 800;

    const bd1Width = state.background.getBounds().width;
    state.background.setScrollFactor(
      (bd1Width - windowWidth) / (gameWidth - windowWidth),
    );

    state.scoreText = this.add.text(16, 16, `score: ${state.score}`, {
      fontSize: '40px',
      fill: '#ff0000',
    });
    state.player = this.physics.add.sprite(80, 110, 'dude').setScale(1);
    state.platforms = this.physics.add.staticGroup();
    state.spikes = this.physics.add.staticGroup();
    state.coin = this.physics.add.staticGroup();
    state.apple = this.physics.add.staticGroup();

    platformer(this, state);
  }

  update() {
  }
}