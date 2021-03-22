import Phaser from 'phaser';
import { anim } from '../config/anim';
import { state } from '../config/state';
import { platformer } from './platformer';

export default class LevelTwo extends Phaser.Scene {
  constructor() {
    super('LevelTwo');
  }

  create() {
    state.active = true;
    state.background = this.add.image(0, 0, 'background');

    state.background2 = this.add.image(0, 0, 'background2');

    state.background.setOrigin(0, 0);
    state.background2.setOrigin(0, 0);

    const gameWidth = parseFloat(state.background.getBounds().width);
    state.width = gameWidth;
    const windowWidth = 800;

    const bd1Width = state.background.getBounds().width;
    state.background.setScrollFactor(
      (bd1Width - windowWidth) / (gameWidth - windowWidth),
    );

    state.scoreText = this.add.text(16, 16, `score: ${state.score}`, {
      fontSize: '40px',
      fill: '#ff0000',
    });

    state.player = this.physics.add.sprite(80, 110, 'dude');
    state.monster = this.physics.add.sprite(310, 364, 'monster');
    state.monster2 = this.physics.add.sprite(310, 428, 'monster2');
    state.monster3 = this.physics.add.sprite(800, 428, 'monster');
    state.monster4 = this.physics.add.sprite(1000, 328, 'monster');

    state.spikes1 = this.physics.add.image(232, 0, 'spikes');
    state.spikes2 = this.physics.add.image(678, 10, 'spikes');
    state.spikes3 = this.physics.add.image(942, 10, 'spikes');
    state.spikes4 = this.physics.add.image(1142, 0, 'spikes');

    state.platforms = this.physics.add.staticGroup();
    state.spikes = this.physics.add.staticGroup();
    state.coin = this.physics.add.staticGroup();
    state.apple = this.physics.add.staticGroup();

    anim(this);
    platformer(this, state);

    this.cameras.main.setBounds(
      0,
      0,
      state.background2.width,
      600,
    );
    this.physics.world.setBounds(
      0,
      0,
      state.width,
      state.background.height + state.player.height,
    );

    this.cameras.main.startFollow(state.player, true, 0.5, 0.5);
    state.player.setCollideWorldBounds(true);
    this.physics.add.collider(state.player, state.platforms);
    this.physics.add.collider(state.goal, state.platforms);

    this.physics.add.collider(state.monster, state.platforms);
    this.physics.add.collider(state.monster2, state.platforms);
    this.physics.add.collider(state.monster3, state.platforms);
    this.physics.add.collider(state.monster4, state.platforms);

    state.spikes1.move = this.tweens.add({
      targets: state.spikes1,
      y: 600,
      ease: 'Linear',
      repeat: -1,
      duration: 2100,
      yoyo: true,
    });

    state.spikes2.move = this.tweens.add({
      targets: state.spikes2,
      y: 600,
      ease: 'Linear',
      repeat: -1,
      duration: 2500,
      yoyo: true,
    });

    state.spikes3.move = this.tweens.add({
      targets: state.spikes3,
      y: 600,
      ease: 'Linear',
      repeat: -1,
      duration: 2300,
      yoyo: true,
    });

    state.spikes4.move = this.tweens.add({
      targets: state.spikes4,
      y: 600,
      ease: 'Linear',
      repeat: -1,
      duration: 2600,
      yoyo: true,
    });

    state.monster.move = this.tweens.add({
      targets: state.monster,
      x: 600,
      ease: 'Linear',
      repeat: -1,
      duration: 1500,
      yoyo: true,
    });

    state.monster2.move = this.tweens.add({
      targets: state.monster2,
      x: 600,
      ease: 'Linear',
      repeat: -1,
      duration: 1900,
      yoyo: true,
    });

    state.monster3.move = this.tweens.add({
      targets: state.monster3,
      x: 900,
      ease: 'Linear',
      repeat: -1,
      duration: 1500,
      yoyo: true,
    });

    state.monster4.move = this.tweens.add({
      targets: state.monster4,
      x: 1100,
      ease: 'Linear',
      repeat: -1,
      duration: 1900,
      yoyo: true,
    });

    this.physics.add.overlap(
      state.player,
      state.coin,
      this.collectReward,
      null,
      this,
    );

    this.physics.add.overlap(
      state.player,
      state.goal,
      this.nextLevel,
      null,
      this,
    );
    state.background.setTint(0xccaacc);
    state.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (state.active) {
      if (state.cursors.right.isDown) {
        state.player.setVelocityX(state.speed);
        state.player.anims.play('right', true);
      } else if (state.cursors.left.isDown) {
        state.player.setVelocityX(-state.speed);
        state.player.anims.play('left', true);
      } else {
        state.player.setVelocityX(0);
        state.player.anims.play('idle', true);
      }

      if (
        (Phaser.Input.Keyboard.JustDown(state.cursors.space)
          || state.cursors.up.isDown)
        && state.player.body.touching.down
      ) {
        state.player.anims.play('jump', true);
        state.player.setVelocityY(-500);
      }

      if (!state.player.body.touching.down) {
        state.player.anims.play('jump', true);
      }

      if (state.player.y > state.background2.height) {
        this.add.text(state.player.x, 100, 'Game Over!', {
          fontFamily: 'Arial',
          fontSize: 36,
          color: '#000000',
        });
        setTimeout(() => {
          state.msg = 'Game Over';
          this.scene.stop();
          this.scene.start('GameOver');
        }, 2000);
      }
    }
  }

  collectReward(_player, coin) {
    coin.disableBody(true, true);
    state.score += 5;
    state.scoreText.setText(`Score: ${state.score}`);
  }

  nextLevel() {
    state.msg = 'You won!!!';
    this.scene.stop();
    this.scene.start('GameOver');
  }
}