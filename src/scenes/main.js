import Phaser from 'phaser';
import { state as st } from '../config/state';

export default class Main extends Phaser.Scene {
  constructor() {
    super('Main');
  }

  create() {
    st.bg = this.add.image(400, 300, 'bg').setScale(0.8);
    st.playButton = this.add.image(400, 440, 'play').setScale(0.8);

    st.playButton.setInteractive({ useHandCursor: true });
    this.onHover(st.playButton);

    st.playButton.on('pointerup', () => {
      this.scene.stop();
      this.scene.start('Menu');
    });
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
