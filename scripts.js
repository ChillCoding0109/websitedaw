let loginAttempts = 0;
const maxAttempts = 3;

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (username === 'admin' && password === 'password') {
        message.style.color = 'green';
        message.textContent = 'Login successful!';
    } else {
        loginAttempts++;
        if (loginAttempts >= maxAttempts) {
            message.style.color = 'red';
            message.textContent = 'Maximum login attempts exceeded. Please try again later.';
            document.querySelector('.log').disabled = true;
        } else {
            message.style.color = 'red';
            message.textContent = `Invalid credentials. You have ${maxAttempts - loginAttempts} attempts left.`;
        }
    }
}

function register() {
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;
    const message = document.getElementById('reg-message');

    if (username && password) {
        message.style.color = 'green';
        message.textContent = 'Registration successful!';
    } else {
        message.style.color = 'red';
        message.textContent = 'Please fill in all fields.';
    }
}