const fs = require('fs');

const max = 100;

function getNumberFunction(num) {
  return `
function getNumber${num}() {
  return ${num};
}

exports.getNumber${num} = () => getNumber${num}();`;
}

for (let i = 1; i <= max; i++) {
  fs.writeFile(`src/experiment_c/import_files/getNumber${i}.js`, getNumberFunction(i), (err) => {
    if (err) throw err;
    console.log(i);
  });
}

let imports = `const { getNumber1 } = require('./import_files/getNumber1');\n`;
let sum = 'getNumber1()';
for (let i = 2; i <= max; i++) {
  imports += `const { getNumber${i} } = require('./import_files/getNumber${i}');\n`;
  sum += ` + getNumber${i}()`;
}

fileContent = `${imports}

function addNumbers() {
  return ${sum};
}

exports.addNumbers = () => addNumbers();`;
fs.writeFile(`src/experiment_c/source_c.js`, fileContent, (err) => {
  if (err) throw err;
  console.log('Saved!');
});
