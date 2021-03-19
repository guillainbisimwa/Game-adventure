import Phaser from 'phaser';
import { state as st } from '../config/state';

export default class Menu extends Phaser.Scene {
  constructor() {
    super('Menu');
  }

  create() {
    st.bg = this.add.image(400, 300, 'bg').setScale(0.8);
    st.optionButton = this.add.image(400, 240, 'play').setScale(0.8);
    st.optionButton = this.add.image(400, 340, 'scores').setScale(0.8);
    st.optionButton = this.add.image(400, 440, 'help').setScale(0.8);
    st.optionButton = this.add.image(400, 540, 'back').setScale(0.8);
  }

  update() {
  }
}
