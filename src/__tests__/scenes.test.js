import 'jest-canvas-mock';
import Main from '../scenes/main';
import Menu from '../scenes/menu';
import BestScores from '../scenes/bestScores';
import GameOver from '../scenes/gameOver';
import Help from '../scenes/help';
import LevelOne from '../scenes/levelOne';
import LevelScene from '../scenes/levelScene';
import LevelTwo from '../scenes/levelTwo';
import PreloaderScene from '../scenes/preloadScene';

describe('Scenes are functions test', () => {
  it('Main Scene is a function', () => {
    expect(typeof Main).toBe('function');
  });
  it('Menu Scene is a function', () => {
    expect(typeof Menu).toBe('function');
  });
  it('BestScores Scene is a function', () => {
    expect(typeof BestScores).toBe('function');
  });
  it('GameOver Scene is a function', () => {
    expect(typeof GameOver).toBe('function');
  });
  it('Help Scene is a function', () => {
    expect(typeof Help).toBe('function');
  });
  it('LevelOne Scene is a function', () => {
    expect(typeof LevelOne).toBe('function');
  });
  it('LevelScene Scene is a function', () => {
    expect(typeof LevelScene).toBe('function');
  });
  it('LevelTwo Scene is a function', () => {
    expect(typeof LevelTwo).toBe('function');
  });
  it('PreloaderScene Scene is a function', () => {
    expect(typeof PreloaderScene).toBe('function');
  });

  it('Main Scene is not to be undefined', () => {
    expect(typeof Main).not.toBe('undefined');
  });
  it('Menu Scene is not to be undefined', () => {
    expect(typeof Menu).not.toBe('undefined');
  });
  it('BestScores Scene is not to be undefined', () => {
    expect(typeof BestScores).not.toBe('undefined');
  });
  it('GameOver Scene is not to be undefined', () => {
    expect(typeof GameOver).not.toBe('undefined');
  });
  it('Help Scene is not to be undefined', () => {
    expect(typeof Help).not.toBe('undefined');
  });
  it('LevelOne Scene is not to be undefined', () => {
    expect(typeof LevelOne).not.toBe('undefined');
  });
  it('LevelScene Scene is not to be undefined', () => {
    expect(typeof LevelScene).not.toBe('undefined');
  });
  it('LevelTwo Scene is not to be undefined', () => {
    expect(typeof LevelTwo).not.toBe('undefined');
  });
  it('PreloaderScene Scene is not to be undefined', () => {
    expect(typeof PreloaderScene).not.toBe('undefined');
  });
});