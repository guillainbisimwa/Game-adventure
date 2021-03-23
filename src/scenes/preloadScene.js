import Phaser from 'phaser';

import bg from '../assets/bg.png';
import play from '../assets/play.png';
import scores from '../assets/scores.png';
import help from '../assets/help.png';
import back from '../assets/back.png';
import monster1 from '../assets/monsterOne.png';
import monster2 from '../assets/monstertwo.png';

import dude from '../assets/dude.png';
import background from '../assets/Background/Background_01.png';
import background2 from '../assets/Background/Background_03.png';

import bgSound from '../assets/HurryWaterWorld.mp3';
import rewardSound from '../assets/reward.mp3';
import gameOverSound from '../assets/gameOver.mp3';

import ground02 from '../assets/Platformer/Ground_02.png';
import ground03 from '../assets/Platformer/Ground_03.png';
import ground04 from '../assets/Platformer/Ground_04.png';
import ground06 from '../assets/Platformer/Ground_06.png';
import ground07 from '../assets/Platformer/Ground_07.png';
import ground08 from '../assets/Platformer/Ground_08.png';
import ground09 from '../assets/Platformer/Ground_09.png';
import ground10 from '../assets/Platformer/Ground_10.png';
import ground11 from '../assets/Platformer/Ground_11.png';
import ground12 from '../assets/Platformer/Ground_12.png';
import ground13 from '../assets/Platformer/Ground_13.png';
import coin from '../assets/Collectable Object/Coin_01.png';
import apple from '../assets/Collectable Object/Apple.png';
import bonus from '../assets/Platformer/Bonus.png';
import brick01 from '../assets/Platformer/Brick_01.png';
import brick02 from '../assets/Platformer/Brick_02.png';
import decorBrick from '../assets/Platformer/Decor_Brick.png';
import spikes from '../assets/Platformer/Spikes.png';
import door01 from '../assets/Platformer/Door_01.png';

export default class Preload extends Phaser.Scene {
  constructor() {
    super('Preload');
  }

  preload() {
    this.load.image('bg', bg);
    this.load.image('play', play);
    this.load.image('scores', scores);
    this.load.image('help', help);
    this.load.image('back', back);

    this.load.image('ground02', ground02);
    this.load.image('ground03', ground03);
    this.load.image('ground04', ground04);
    this.load.image('ground06', ground06);
    this.load.image('ground07', ground07);
    this.load.image('ground08', ground08);
    this.load.image('ground09', ground09);
    this.load.image('ground10', ground10);
    this.load.image('ground11', ground11);
    this.load.image('ground12', ground12);
    this.load.image('ground13', ground13);
    this.load.image('bonus', bonus);
    this.load.image('brick01', brick01);
    this.load.image('brick02', brick02);
    this.load.image('decorBrick', decorBrick);
    this.load.image('spikes', spikes);
    this.load.image('door01', door01);
    this.load.image('coin', coin);
    this.load.image('apple', apple);

    this.load.audio('bgSound', bgSound);
    this.load.audio('rewardSound', rewardSound);
    this.load.audio('gameOverSound', gameOverSound);

    this.load.spritesheet('dude', dude, {
      frameWidth: 30,
      frameHeight: 45,
    });
    this.load.image('background', background);
    this.load.image('background2', background2);

    this.load.spritesheet('monster', monster1, {
      frameWidth: 50,
      frameHeight: 70,
    });

    this.load.spritesheet('monster2', monster2, {
      frameWidth: 50,
      frameHeight: 70,
    });
    this.load.on('complete', this.complete, { scene: this.scene });
  }

  complete() {
    this.scene.start('Menu');
  }
}
