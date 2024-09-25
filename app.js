const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const signUpForm = document.getElementById('signUpForm');
const signInForm = document.getElementById('signInForm');

const signUpEmail = document.getElementById('signUpEmail');
const signUpPassword = document.getElementById('signUpPassword');
const signInEmail = document.getElementById('signInEmail');
const signInPassword = document.getElementById('signInPassword');

// Variables to store credentials after sign-up
let registeredEmail = '';
let registeredPassword = '';

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Handle sign-up form submission
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Store the entered email and password during sign-up
    registeredEmail = signUpEmail.value;
    registeredPassword = signUpPassword.value;

    alert("Sign-up successful! You can now sign in.");
    container.classList.remove("active"); // Switch to sign-in form
});

// Handle sign-in form submission
signInForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Check if the entered sign-in email and password match the registered ones
    if (signInEmail.value === registeredEmail && signInPassword.value === registeredPassword) {
        alert("You have successfully logged in. Redirecting to home page...");
        window.location.href = "home.html"; // Redirect to home page
    } else {
        alert("Invalid email or password. Please try again.");
    }
});