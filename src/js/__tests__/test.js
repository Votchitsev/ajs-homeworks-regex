import Validator from '../task1.js';

test('testing positive validateUsername method from Validator class', () => {
  const validator = new Validator();
  expect(validator.validateUsername('a-12b')).toBe(true);
});

test.each([
  '1abc',
  'abc1',
  '-abc',
  'abc-',
  '_abc',
  'abc_',
])('check username %s', (username) => {
  const validator = new Validator();
  expect(validator.validateUsername(username)).toBe(false);
});
