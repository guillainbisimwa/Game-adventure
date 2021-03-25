import Phaser from 'phaser';
import { state as st } from '../config/state';

const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;

export default class Main extends Phaser.Scene {
  constructor() {
    super('Main');
  }

  create() {
    st.bg = this.add.image(400, 300, 'bg').setScale(0.8);

    const print = this.add.text(300, 400, '', { fontSize: '18px', fill: '#a21' });

    CreateLoginDialog(this, {
      x: 400,
      y: 300,
      title: 'Welcome',
      username: '',
    }).on('login', (username) => {
      if (username.length > 2 && username.length < 10) {
        st.playerName = username;
        this.scene.stop();
        this.scene.start('Menu');
      } else {
        print.text = 'Enter a valid name';
      }
    }).popUp(500);
  }

  update() {
  }
}

const getValue = Phaser.Utils.Objects.GetValue;

const CreateLoginDialog = (scene, config, onSubmit) => {
  let username = getValue(config, 'username', '');
  const title = getValue(config, 'title', 'Welcome');
  const x = getValue(config, 'x', 0);
  const y = getValue(config, 'y', 0);
  const width = getValue(config, 'width', undefined);
  const height = getValue(config, 'height', undefined);

  const background = scene.rexUI.add.roundRectangle(0, 0, 10, 10, 10, COLOR_PRIMARY);
  const titleField = scene.add.text(0, 0, title);
  const userNameField = scene.rexUI.add.label({
    orientation: 'x',
    background: scene.rexUI.add.roundRectangle(0, 0, 10, 10, 10).setStrokeStyle(2, COLOR_LIGHT),
    icon: scene.add.image(0, 0, 'dude'),
    text: scene.rexUI.add.BBCodeText(0, 0, username, { fixedWidth: 150, fixedHeight: 36, valign: 'center' }),
    space: {
      top: 5, bottom: 5, left: 5, right: 5, icon: 10,
    },
  }).setInteractive().on('pointerdown', () => {
    const config = {
      onTextChanged(textObject, text) {
        username = text;
        textObject.text = text;
      },
    };
    scene.rexUI.edit(userNameField.getElement('text'), config);
  });

  const loginButton = scene.rexUI.add.label({
    orientation: 'x',
    background: scene.rexUI.add.roundRectangle(0, 0, 10, 10, 10, COLOR_LIGHT),
    text: scene.add.text(0, 0, 'Login'),
    space: {
      top: 8, bottom: 8, left: 8, right: 8,
    },
  })
    .setInteractive()
    .on('pointerdown', () => {
      loginDialog.emit('login', username);
    });

  const loginDialog = scene.rexUI.add.sizer({
    orientation: 'y',
    x,
    y,
    width,
    height,
  })
    .addBackground(background)
    .add(titleField, 0, 'center', {
      top: 10, bottom: 10, left: 10, right: 10,
    }, false)
    .add(userNameField, 0, 'left', { bottom: 10, left: 10, right: 10 }, true)
    .add(loginButton, 0, 'center', { bottom: 10, left: 10, right: 10 }, false)
    .layout();
  return loginDialog;
};
