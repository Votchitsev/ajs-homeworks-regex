import Validator from '../task1.js';

test('testing validateUsername method from Validator class', () => {
  const validator = new Validator();
  expect(validator.validateUsername('a')).toBe(true);
});
