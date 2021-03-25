import 'jest-canvas-mock';
import Main from '../scenes/main';

describe('Scenes are functions test', () => {
  it('Main Scene is a function', () => {
    expect(typeof Main).toBe('function');
  });
});