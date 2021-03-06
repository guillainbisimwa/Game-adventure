const anim = (context) => {
  context.anims.create({
    key: 'right',
    frames: context.anims.generateFrameNumbers('dude', { start: 8, end: 11 }),
    frameRate: 0,
    repeat: -1,
  });

  context.anims.create({
    key: 'left',
    frames: context.anims.generateFrameNumbers('dude', { start: 4, end: 7 }),
    frameRate: 0,
    repeat: -1,
  });

  context.anims.create({
    key: 'idle',
    frames: context.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1,
  });

  context.anims.create({
    key: 'jump',
    frames: context.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1,
  });
};
export default anim;