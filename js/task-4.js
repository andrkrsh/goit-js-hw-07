const loginForm = document.querySelector('.login-form');
const formInputs = document.querySelectorAll('input');
formInputs.forEach(input => {
    input.classList.add('form-input');
});

const formBtn = document.querySelector('button');
formBtn.classList.add('form-btn');

loginForm.addEventListener('submit', event => {
    event.preventDefault();

    const emailInput = loginForm.elements.email;
    const passwordInput = loginForm.elements.password;

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (!emailValue || !passwordValue) {
        alert('All form fields must be filled in');
        return;
    }

    const formData = {
        email: emailValue,
        password: passwordValue
    };

    console.log(formData);
    loginForm.reset();
});