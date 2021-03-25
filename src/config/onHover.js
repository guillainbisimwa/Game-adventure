const onHover = (obj) => {
  obj.on('pointerover', () => {
    obj.setTint(0xecdccc);
  });
  obj.on('pointerout', () => {
    obj.setTint();
  });
};

export default onHover;