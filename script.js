const registerButton = document.getElementById('register');
const infoBox = document.getElementById('info');
const helloBox = document.getElementById('hello');
const submitButton = document.getElementById('submit');
const closeButton = document.getElementById('close');
let alertText = document.getElementById('error');

registerButton.onclick = () => {
    infoBox.style.display = 'block';
};

submitButton.onclick = () => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;

    if (!name) {
        alertText = alertText.replace('', 'Enter a valid email address.');
    }
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }
    infoBox.style.display = 'none';
    helloBox.textContent = `Welcome ${name}!`;
};

