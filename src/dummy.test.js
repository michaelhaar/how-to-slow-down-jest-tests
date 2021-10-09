function sleep(time) {
  var stop = new Date().getTime();
  while (new Date().getTime() < stop + time) {}
}

it('should run first', () => {
  sleep(2000);
});
