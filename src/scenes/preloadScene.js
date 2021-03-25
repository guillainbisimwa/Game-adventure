import Phaser from 'phaser';

export default class Preload extends Phaser.Scene {
  constructor() {
    super('Preload');
  }

  preload() {
    this.load.image('bg', '../src/assets/bg.png');
    this.load.image('play', '../src/assets/play.png');
    this.load.image('scores', '../src/assets/scores.png');
    this.load.image('help', '../src/assets/help.png');
    this.load.image('back', '../src/assets/back.png');

    this.load.image('ground02', '../src/assets/Platformer/Ground_02.png');
    this.load.image('ground03', '../src/assets/Platformer/Ground_03.png');
    this.load.image('ground04', '../src/assets/Platformer/Ground_04.png');
    this.load.image('ground06', '../src/assets/Platformer/Ground_06.png');
    this.load.image('ground07', '../src/assets/Platformer/Ground_07.png');
    this.load.image('ground08', '../src/assets/Platformer/Ground_08.png');
    this.load.image('ground09', '../src/assets/Platformer/Ground_09.png');
    this.load.image('ground10', '../src/assets/Platformer/Ground_10.png');
    this.load.image('ground11', '../src/assets/Platformer/Ground_11.png');
    this.load.image('ground12', '../src/assets/Platformer/Ground_12.png');
    this.load.image('ground13', '../src/assets/Platformer/Ground_13.png');
    this.load.image('bonus', '../src/assets/Platformer/Bonus.png');
    this.load.image('brick01', '../src/assets/Platformer/Brick_01.png');
    this.load.image('brick02', '../src/assets/Platformer/Brick_02.png');
    this.load.image('decorBrick', '../src/assets/Platformer/Decor_Brick.png');
    this.load.image('spikes', '../src/assets/Platformer/Spikes.png');
    this.load.image('door01', '../src/assets/Platformer/Door_01.png');
    this.load.image('coin', '../src/assets/Collectable Object/Coin_01.png');
    this.load.image('apple', '../src/assets/Collectable Object/Apple.png');
    this.load.audio('bgSound', '../src/assets/HurryWaterWorld.mp3');
    this.load.audio('rewardSound', '../src/assets/reward.mp3');
    this.load.audio('gameOverSound', '../src/assets/gameOver.mp3');
    this.load.image('background', '../src/assets/Background/Background_01.png');
    this.load.image('background2', '../src/assets/Background/Background_03.png');

    this.load.spritesheet('dude', '../src/assets/dude.png', {
      frameWidth: 30,
      frameHeight: 45,
    });
    this.load.spritesheet('monster', '../src/assets/monsterOne.png', {
      frameWidth: 50,
      frameHeight: 70,
    });

    this.load.spritesheet('monster2', '../src/assets/monstertwo.png', {
      frameWidth: 50,
      frameHeight: 70,
    });
    this.load.on('complete', this.complete, { scene: this.scene });
  }

  complete() {
    this.scene.start('Main');
  }
}
