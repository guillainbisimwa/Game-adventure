import Phaser from 'phaser';
import { state as st } from '../config/state';

export default class Menu extends Phaser.Scene {
  constructor() {
    super('Menu');
  }

  create() {
    st.bg = this.add.image(248, 300, 'bg').setScale(0.7);
    st.optionButton = this.add.image(250, 240, 'play').setScale(0.4);
  }

  update() {
  }
}
