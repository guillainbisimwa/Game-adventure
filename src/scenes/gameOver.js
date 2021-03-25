import Phaser from 'phaser';
import onHover from '../config/onHover';
import { state as st } from '../config/state';

export default class GameOver extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  create() {
    st.sound.stop();
    st.bg = this.add.image(400, 300, 'bg').setScale(0.8);
    st.scoresButton = this.add.image(400, 340, 'scores').setScale(0.8);
    st.helpButton = this.add.image(400, 440, 'help').setScale(0.8);
    st.backButton = this.add.image(400, 540, 'back').setScale(0.8);

    st.xhr = new XMLHttpRequest();
    st.xhr.open('POST', 'https://k-backend-api.herokuapp.com/api/scores', true);

    st.xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    st.xhr.onreadystatechange = () => {

    };
    st.xhr.send(`name=${st.playerName}&scores=${st.score}`);

    this.add.text(250, 150, `${st.msg}`, { fontSize: '50px', fill: '#000000' });
    this.add.text(250, 240, `${st.playerName}, your score is: ${st.score}`, { fontSize: '20px', fill: '#000000' });

    st.scoresButton.setInteractive({ useHandCursor: true });
    onHover(st.scoresButton);

    st.helpButton.setInteractive({ useHandCursor: true });
    onHover(st.helpButton);

    st.backButton.setInteractive({ useHandCursor: true });
    onHover(st.backButton);

    st.backButton.on('pointerup', () => {
      this.scene.stop();
      this.scene.start('Menu');
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
}
