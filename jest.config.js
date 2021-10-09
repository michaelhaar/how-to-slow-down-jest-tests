// jest.config.js
const { defaults } = require('jest-config');
module.exports = {
  ...defaults,
  testSequencer: './helper_files/test_sequencer.js',
};
