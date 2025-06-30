document.addEventListener("DOMContentLoaded", function () {
  const registerBtn = document.getElementById('register');
  const infoBox = document.getElementById('info');
  const helloBox = document.getElementById('hello');
  const submitBtn = document.getElementById('submit');

  registerBtn.onclick = () => {
    infoBox.style.display = 'block';
  };

  submitBtn.onclick = () => {
    const name = document.getElementById('name').value.trim();
    if (name) {
      infoBox.style.display = 'none';
      helloBox.textContent = `Welcome ${name}!`;
    }
  };
});
