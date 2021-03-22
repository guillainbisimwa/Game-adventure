import Phaser from 'phaser';
import { state as st } from '../config/state';

export default class Help extends Phaser.Scene {
  constructor() {
    super('Help');
  }

  create() {
    st.bg = this.add.image(400, 300, 'bg').setScale(0.8);
    st.backButton = this.add.image(400, 540, 'back').setScale(0.8);

    this.add.text(340, 130, 'HELP', { fontSize: '50px', fill: '#000000' });

    this.add.text(140, 180, `
    You need to collect 
    as many gifts as possible.
    Press Left arrow to go feft;
    Right arrow to go right and
    Up arrow to jump.`, { fontSize: '25px', fill: '#000000' });

    this.add.text(190, 380, 'Created by Guillain BISIMWA', {
      fontSize: '25px',
      fill: '#000000',
    });

    this.add.text(190, 410, 'JavaScript Capstone Project', {
      fontSize: '25px',
      fill: '#000000',
    });

    this.add.text(270, 440, '@Microverseinc', {
      fontSize: '25px',
      fill: '#000000',
    });

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
