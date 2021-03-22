import Phaser from 'phaser';
import { state as st } from '../config/state';

export default class Menu extends Phaser.Scene {
  constructor() {
    super('Menu');
  }

  create() {
    st.bg = this.add.image(400, 300, 'bg').setScale(0.8);
    st.playButton = this.add.image(400, 240, 'play').setScale(0.8);
    st.scoresButton = this.add.image(400, 340, 'scores').setScale(0.8);
    st.helpButton = this.add.image(400, 440, 'help').setScale(0.8);

    st.playButton.setInteractive({ useHandCursor: true });
    this.onHover(st.playButton);

    st.scoresButton.setInteractive({ useHandCursor: true });
    this.onHover(st.scoresButton);

    st.helpButton.setInteractive({ useHandCursor: true });
    this.onHover(st.helpButton);

    st.playButton.on('pointerup', () => {
      this.scene.stop();
      this.scene.start('Level');
      st.score = 0;
      // saveScore();
      // st.called = false;
      // setCalled();
    });
    st.scoresButton.on('pointerup', () => {
      this.scene.stop();
      this.scene.start('BestScores');
    });

    st.helpButton.on('pointerup', () => {
      this.scene.stop();
      this.scene.start('Help');
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
