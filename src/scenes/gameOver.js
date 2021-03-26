import Phaser from 'phaser';
import { postScore } from '../config/leaderboardApi';
import onHover from '../config/onHover';
import state from '../config/state';

export default class GameOver extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  create() {
    state.sound.stop();
    state.bg = this.add.image(400, 300, 'bg').setScale(0.8);
    state.scoresButton = this.add.image(400, 340, 'scores').setScale(0.8);
    state.helpButton = this.add.image(400, 440, 'help').setScale(0.8);
    state.backButton = this.add.image(400, 540, 'back').setScale(0.8);

    // state.xhr = new XMLHttpRequest();
    // state.xhr.open('POST', 'https://k-backend-api.herokuapp.com/api/scores', true);

    // state.xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // state.xhr.onreadystatechange = () => {

    // };
    // state.xhr.send(`name=${state.playerName}&scores=${state.score}`);
    postScore(state.playerName, state.score);

    this.add.text(250, 150, `${state.msg}`, { fontSize: '50px', fill: '#000000' });
    this.add.text(250, 240, `${state.playerName}, your score is: ${state.score}`, { fontSize: '20px', fill: '#000000' });

    state.scoresButton.setInteractive({ useHandCursor: true });
    onHover(state.scoresButton);

    state.helpButton.setInteractive({ useHandCursor: true });
    onHover(state.helpButton);

    state.backButton.setInteractive({ useHandCursor: true });
    onHover(state.backButton);

    state.backButton.on('pointerup', () => {
      this.scene.stop();
      this.scene.start('Menu');
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
