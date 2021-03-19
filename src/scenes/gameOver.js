import Phaser from 'phaser';
import { state as st } from '../config/state';

export default class GameOver extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  create() {
    st.bg = this.add.image(400, 300, 'bg').setScale(0.8);
    st.scoresButton = this.add.image(400, 340, 'scores').setScale(0.8);
    st.helpButton = this.add.image(400, 440, 'help').setScale(0.8);

    st.scoresButton.setInteractive({ useHandCursor: true });
    this.onHover(st.scoresButton);

    st.helpButton.setInteractive({ useHandCursor: true });
    this.onHover(st.helpButton);
  }

  update() {
  }

  onHover(obj) {
    obj.on('pointerover', () => {
      obj.setTint(0xecdccc);
    });
    obj.on('pointerout', () => {
      obj.setTint();
    });
  }
}
