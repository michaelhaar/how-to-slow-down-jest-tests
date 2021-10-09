const fs = require('fs');

function getNumberFunction(num) {
  return `
function getNumber${num}() {
  return ${num};
}\n`;
}

let fileContent = '';
for (let i = 1; i <= 100; i++) {
  fileContent += getNumberFunction(i);
}

let sum = 'getNumber1()';
for (let i = 2; i <= 100; i++) {
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
