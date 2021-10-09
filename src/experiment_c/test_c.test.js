const { addNumbers } = require('./source_c');

it('should add numbers 1 to 100', () => {
  const result = addNumbers();
  expect(result).toBe(5050);
});
