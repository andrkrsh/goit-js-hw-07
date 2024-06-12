const nameInput = document.getElementById('name-input');
nameInput.classList.add('input')
const nameOutput = document.getElementById('name-output');

const greeting = document.querySelector('h1');
greeting.classList.add('hello');

nameInput.addEventListener('input', event => {
    const inputValue = event.target.value.trim();

    if (inputValue === '' || inputValue === ' ') {
        nameOutput.textContent = 'Anonymous';
    } else {
        nameOutput.textContent = inputValue;
    }
});