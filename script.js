const registerButton = document.getElementById('register');
const infoBox = document.getElementById('info');
const helloBox = document.getElementById('hello');
const submitButton = document.getElementById('submit');

registerButton.onclick = () => {
    infoBox.style.display = 'block';
};

submitButton.onclick = () => {
    const name = document.getElementById('name').value.trim();
    if (name) {
        infoBox.style.display = 'none';
        helloBox.textContent = `Welcome ${name}!`;
    }
};

