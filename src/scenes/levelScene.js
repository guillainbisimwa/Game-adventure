import Phaser from 'phaser';
import { state } from '../config/state';

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
  }

  update() {
  }
}