// Simulate users stored in localStorage
let users = JSON.parse(localStorage.getItem('users')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser'));

// Elements
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const loginLink = document.getElementById('loginLink');
const registerLink = document.getElementById('registerLink');
const downloadLink = document.getElementById('downloadLink');

// Handle Login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        alert('Login Successful!');
        window.location.reload();
    } else {
        alert('Invalid credentials!');
    }
});

// Handle Register
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = registerForm.querySelector('input[type="email"]').value;
    const username = registerForm.querySelector('input[type="text"]').value;
    const password = registerForm.querySelector('input[type="password"]').value;
    const confirmPassword = registerForm.querySelector('input[type="password"]').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    const newUser = { email, username, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful! You can now login.');
    registerForm.reset();
});

// Check if user is logged in
if (currentUser) {
    loginLink.classList.add('hidden');
    registerLink.classList.add('hidden');
    downloadLink.classList.remove('hidden');
}
