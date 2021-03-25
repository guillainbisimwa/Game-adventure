import Phaser from 'phaser';
import onHover from '../config/onHover';
import { state as st } from '../config/state';

export default class Menu extends Phaser.Scene {
  constructor() {
    super('Menu');
  }

  create() {
    st.bg = this.add.image(400, 300, 'bg').setScale(0.8);
    st.name = this.add.text(300, 130, `Hello ${st.playerName}!`, { fontSize: '25px', fill: '#000000' });

    st.playButton = this.add.image(400, 240, 'play').setScale(0.8);
    st.scoresButton = this.add.image(400, 340, 'scores').setScale(0.8);
    st.helpButton = this.add.image(400, 440, 'help').setScale(0.8);

    st.playButton.setInteractive({ useHandCursor: true });
    onHover(st.playButton);

    st.scoresButton.setInteractive({ useHandCursor: true });
    onHover(st.scoresButton);

    st.helpButton.setInteractive({ useHandCursor: true });
    onHover(st.helpButton);

    st.playButton.on('pointerup', () => {
      this.scene.stop();
      this.scene.start('Level');
      st.score = 0;
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
}
