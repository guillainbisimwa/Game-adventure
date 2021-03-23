// eslint-disable-next-line import/prefer-default-export
export const bgSound = (context) => context.sound.add('bgSound', {
  mute: false,
  volume: 1,
  rate: 1,
  detune: 0,
  seek: 0,
  loop: true,
  delay: 0,
});