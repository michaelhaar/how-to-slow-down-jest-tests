const { addNumbers } = require('./source_c');

function sleep(time) {
  var stop = new Date().getTime();
  while (new Date().getTime() < stop + time) {}
}

it('should run 5sec', () => {
  sleep(1000);
});

it('should add numbers 1 to 100', () => {
  const result = addNumbers();
  expect(result).toBe(5050);
});
