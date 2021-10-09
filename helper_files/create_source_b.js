const fs = require('fs');

const max = 100;

function getNumberFunction(num) {
  return `
function getNumber${num}() {
  return ${num};
}\n`;
}

let fileContent = '';
for (let i = 1; i <= max; i++) {
  fileContent += getNumberFunction(i);
}

let sum = 'getNumber1()';
for (let i = 2; i <= max; i++) {
  sum += ` + getNumber${i}()`;
}

fileContent += `
function addNumbers() {
  return ${sum};
}

exports.addNumbers = () => addNumbers();`;

fs.writeFile(`src/experiment_b/source_b.js`, fileContent, (err) => {
  if (err) throw err;
  console.log('Saved!');
});
