import Phaser from 'phaser';
import onHover from '../config/onHover';
import state from '../config/state';

export default class Menu extends Phaser.Scene {
  constructor() {
    super('Menu');
  }

  create() {
    state.bg = this.add.image(400, 300, 'bg').setScale(0.8);
    state.name = this.add.text(300, 130, `Hello ${state.playerName}!`, { fontSize: '25px', fill: '#000000' });

    state.playButton = this.add.image(400, 240, 'play').setScale(0.8);
    state.scoresButton = this.add.image(400, 340, 'scores').setScale(0.8);
    state.helpButton = this.add.image(400, 440, 'help').setScale(0.8);

    state.playButton.setInteractive({ useHandCursor: true });
    onHover(state.playButton);

    state.scoresButton.setInteractive({ useHandCursor: true });
    onHover(state.scoresButton);

    state.helpButton.setInteractive({ useHandCursor: true });
    onHover(state.helpButton);

    state.playButton.on('pointerup', () => {
      this.scene.stop();
      this.scene.start('Level');
      state.score = 0;
    });
    state.scoresButton.on('pointerup', () => {
      this.scene.stop();
      this.scene.start('BestScores');
    });

    state.helpButton.on('pointerup', () => {
      this.scene.stop();
      this.scene.start('Help');
    });
  }
}
