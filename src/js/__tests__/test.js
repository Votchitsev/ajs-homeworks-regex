import Validator from '../task1.js';
import formatPhoneNumber from '../extraTask.js';

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

test.each([
  '8 (000) 000-00-00',
  '+7 000 000 00 00',
])('test phone formatter %s', (number) => {
  expect(formatPhoneNumber(number)).toBe('+70000000000');
});
