const form = document.querySelector('#form');

form.addEventListener('key', () => {
  const formData = {
    name: document.querySelector('#name').value,
    email: document.querySelector('#email').value,
    message: document.querySelector('').value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
});