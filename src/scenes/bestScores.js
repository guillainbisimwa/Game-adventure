import Phaser from 'phaser';
import { state as st } from '../config/state';

export default class BestScores extends Phaser.Scene {
  constructor() {
    super('BestScores');
  }

  create() {
    st.bg = this.add.image(400, 300, 'bg').setScale(0.8);
    st.backButton = this.add.image(400, 540, 'back').setScale(0.8);

    this.add.text(190, 130, '10 BEST SCORES', { fontSize: '50px', fill: '#000000' });
    const print = this.add.text(250, 200, '', { fontSize: '25px', fill: '#000000' });

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://k-backend-api.herokuapp.com/api/scores', true);

    xhr.onload = () => {
      const req = JSON.parse(xhr.responseText);
      req.sort((a, b) => b.scores - a.scores);
      let i = 1;
      req.slice(0, 10).forEach(element => {
        print.text += `${i}. ${element.name} - [${element.scores}] \n`;
        i += 1;
      });
    };

    xhr.send(null);

    st.backButton.setInteractive({ useHandCursor: true });
    this.onHover(st.backButton);

    st.backButton.on('pointerup', () => {
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
