let loginAttempts = 0;
const maxAttempts = 3;

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        message.style.color = 'green';
        message.textContent = 'Login successful!';
        setTimeout(() => {
            window.location.href = 'main.html'; // Redirect to the main page
        }, 2000); // 2 seconds delay
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
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some(user => user.username === username);

        if (userExists) {
            message.style.color = 'red';
            message.textContent = 'Username already exists. Please choose another one.';
        } else {
            users.push({ username, password });
            localStorage.setItem('users', JSON.stringify(users));
            message.style.color = 'green';
            message.textContent = 'Registration successful!';
        }
    } else {
        message.style.color = 'red';
        message.textContent = 'Please fill in all fields.';
    }
}