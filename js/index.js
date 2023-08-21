const nombreKey = 'dataIngresa';

document.addEventListener('DOMContentLoaded', () => {
  const botonGuardar = document.getElementById('buttonText');
  botonGuardar.addEventListener('click', () => {
    const campoConData = document.getElementById('inputText');
    const data = campoConData.value;
    localStorage.setItem(nombreKey, data);
  });
});
