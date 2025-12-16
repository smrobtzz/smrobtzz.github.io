import init, { main_js } from './sicxeas.js';

init();

const input = document.getElementById('input');
const output = document.getElementById('output');
var file_name = "";

const examples_row = document.getElementById('examples-row');
const examples = [
  'basic.txt', 'control_section.txt', 'functions.txt',
  'literals.txt', 'prog_blocks.txt', 'macros.txt'
];
for (const example of examples) {
  const button = document.createElement('button');
  button.textContent = example;
  button.id = example;
  button.addEventListener('click', function() {
    fetch(example, { cache: 'no-store' }).then(x => x.text()).then((text) => {
      file_name = example;
      input.value = text;
    });
  })
  examples_row.appendChild(button);
}

const errors = document.getElementById('errors');
input.value = "";
errors.value = "";
output.value = "";

const assemble_btn = document.getElementById('assemble');
assemble_btn.addEventListener('click', function() {
  output.value = "";
  errors.value = main_js(file_name, input.value);
});
