import { postScore } from '../config/leaderboardApi';

describe('LeaderBoard Test', () => {
  it('Should POST player name and score', () => {
    postScore('Joe', 50).then(result => {
      expect(result.result).toBe('Leaderboard score created correctly.');
    }).catch(err => err);
  });
});