const form = document.querySelector('#form');

form.addEventListener('key', () => {
  const formData = {
    names: document.querySelector('#name').value,
    email: document.querySelector('#email').value,
    message: document.querySelector('#message').value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
});