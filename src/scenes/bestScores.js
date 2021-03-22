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

    const list = [
      { name: 'Guy', score: 50 },
      { name: 'Eva', score: 70 },
      { name: 'John', score: 10 },
      { name: 'Josh', score: 20 },
      { name: 'Starr', score: 60 },
      { name: 'Kim', score: 90 },
      { name: 'Joe', score: 90 },
      { name: 'jeremy', score: 90 },
      { name: 'Aline', score: 90 },
      { name: 'Brack', score: 90 },
    ];

    for (let i = 0; i < list.length; i += 1) {
      this.add.text(250, 200 + (i * 30), `${i + 1}. ${list[i].name}: [${list[i].score}]`, { fontSize: '25px', fill: '#000000' });
    }

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
