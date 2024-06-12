function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesDiv = document.querySelector('#boxes');
boxesDiv.classList.add('boxes-container');

const createDiv = document.querySelector('#controls');
createDiv.classList.add('create-form')

function createBoxes(amount) {
  const boxesDiv = document.querySelector('#boxes');
  const boxes = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.classList.add('box');
    boxes.push(box);
  }
  boxesDiv.append(...boxes);
}

function destroyBoxes() {
  const boxesDiv = document.querySelector('#boxes');
  boxesDiv.innerHTML = '';

}

const createButton = document.querySelector('[data-create]');
createButton.classList.add('btn-create')
const destroyButton = document.querySelector('[data-destroy]');
destroyButton.classList.add('btn-des')
const input = document.querySelector('input');
input.classList.add('input-create')

createButton.addEventListener('click', () => {
  const amount = input.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Number between 1 and 100');
  }
});

destroyButton.addEventListener('click', destroyBoxes);
