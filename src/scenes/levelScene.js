import Phaser from 'phaser';
import anim from '../config/anim';
import { state } from '../config/state';
import platformer from './platformer';
import bgSound from '../config/sound';

export default class Level extends Phaser.Scene {
  constructor() {
    super('Level');
  }

  create() {
    const sound = bgSound(this);
    state.sound = sound;
    state.sound.play();

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
    state.monster4 = this.physics.add.sprite(1000, 328, 'monster');

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
    this.physics.add.collider(state.player, state.platforms);
    this.physics.add.collider(state.goal, state.platforms);

    this.physics.add.collider(state.monster, state.platforms);
    this.physics.add.collider(state.monster4, state.platforms);

    state.monster.move = this.tweens.add({
      targets: state.monster,
      x: 600,
      ease: 'Linear',
      repeat: -1,
      duration: 2900,
      yoyo: true,
    });

    state.monster4.move = this.tweens.add({
      targets: state.monster4,
      x: 1100,
      ease: 'Linear',
      repeat: -1,
      duration: 2900,
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
        this.sound.add('gameOverSound').play();
        state.msg = 'Game over!';
        this.scene.stop();
        this.scene.start('GameOver');
      }
    }
  }

  collectReward(_player, coin) {
    coin.disableBody(true, true);
    this.sound.add('rewardSound').play();
    state.score += 5;
    state.scoreText.setText(`Score: ${state.score}`);
  }

  nextLevel() {
    this.sound.add('rewardSound').play();
    this.scene.stop();
    this.scene.start('LevelOne');
  }
}