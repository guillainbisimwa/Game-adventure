import Phaser from 'phaser';
import { fetchScores } from '../config/leaderboardApi';
import onHover from '../config/onHover';
import state from '../config/state';

export default class BestScores extends Phaser.Scene {
  constructor() {
    super('BestScores');
  }

  create() {
    state.bg = this.add.image(400, 300, 'bg').setScale(0.8);
    state.backButton = this.add.image(400, 540, 'back').setScale(0.8);

    this.add.text(190, 130, '10 BEST SCORES', { fontSize: '48px', fill: '#000000' });
    const print = this.add.text(250, 200, '', { fontSize: '25px', fill: '#000000' });
    fetchScores(print);

    state.backButton.setInteractive({ useHandCursor: true });
    onHover(state.backButton);

    state.backButton.on('pointerup', () => {
      this.scene.stop();
      this.scene.start('Menu');
    });
  }
}
