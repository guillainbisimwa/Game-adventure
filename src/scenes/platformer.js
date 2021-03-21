export const platformer = (context, state) => {
  state.platforms.create(32, 503, 'ground02');
  state.platforms.create(96, 503, 'ground12');
  state.platforms.create(32, 566, 'ground06');
  state.platforms.create(96, 566, 'ground07');
  state.platforms.create(160, 566, 'ground08');

  state.platforms.create(300, 600, 'ground10');
  state.platforms.create(364, 600, 'ground11');
  state.platforms.create(428, 600, 'ground11');
  state.platforms.create(492, 600, 'ground11');
  state.platforms.create(556, 600, 'ground11');
  state.platforms.create(620, 600, 'ground12');

  state.platforms.create(364, 450, 'bonus');
  state.platforms.create(428, 450, 'brick01');
  state.platforms.create(492, 450, 'brick02');
  state.platforms.create(556, 450, 'decorBrick');

  state.platforms.create(800, 500, 'ground10');
  state.platforms.create(864, 500, 'ground12');

  state.platforms.create(832, 350, 'brick01');

  state.platforms.create(1000, 400, 'ground10');
  state.platforms.create(1064, 400, 'ground12');

  state.platforms.create(1200, 503, 'ground04');
  state.platforms.create(1200, 566, 'ground09');

  state.platforms.create(1264, 503, 'ground02');
  state.platforms.create(1328, 503, 'ground02');
  state.platforms.create(1264, 566, 'ground06');
  state.platforms.create(1328, 566, 'ground06');

  state.spikes.create(232, 595, 'spikes');

  state.spikes.create(678, 595, 'spikes');
  state.spikes.create(742, 595, 'spikes');

  state.spikes.create(942, 595, 'spikes');

  state.spikes.create(1142, 595, 'spikes');

  state.coin.create(64, 445, 'coin');
  state.coin.create(155, 508, 'apple');

  state.coin.create(428, 542, 'coin');
  state.coin.create(489, 542, 'coin');
  state.coin.create(553, 542, 'coin');

  state.coin.create(364, 392, 'coin');
  state.coin.create(556, 392, 'coin');
  state.coin.create(592, 264, 'coin');
  state.coin.create(656, 264, 'coin');

  state.coin.create(800, 442, 'coin');

  state.coin.create(832, 158, 'apple');

  state.coin.create(1000, 272, 'apple');
  state.coin.create(1064, 272, 'coin');

  state.coin.create(1200, 311, 'coin');

  state.goal = context.physics.add
    .sprite(state.width - 20, 120, 'door01')
    .setScale(1);

  context.physics.add.overlap(
    state.player,
    state.spikes,
    () => {
      context.add.text(state.player.x, 100, 'Game Over!', {
        fontFamily: 'Arial',
        fontSize: 36,
        color: '#000000',
      });
      setTimeout(() => {
        context.scene.stop();
        context.scene.start('GameOver');
      }, 2000);
    },
    null,
    context,
  );

  context.physics.add.overlap(
    state.player,
    state.monster,
    () => {
      context.scene.stop();
      context.scene.start('GameOver');
    },
    null,
    context,
  );

  context.physics.add.overlap(
    state.player,
    state.monster2,
    () => {
      context.scene.stop();
      context.scene.start('GameOver');
    },
    null,
    context,
  );
};
