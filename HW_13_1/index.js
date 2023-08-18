const textField = document.getElementById('textField');
const infoDiv = document.getElementById('infoDiv');

textField.addEventListener('focus', () => {
  infoDiv.style.display = 'block';
});

textField.addEventListener('blur', () => {
  infoDiv.style.display = 'none';
});