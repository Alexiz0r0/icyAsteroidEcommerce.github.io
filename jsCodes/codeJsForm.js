const form = document.getElementById('form');
const inputs=document.querySelectorAll('#form input');
const expresiones = {
  /*Letras, numeros, guion y guion_bajo*/
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
  /*Letras y espacios, pueden llevar acentos.*/
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,

  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,

	celular: /^\d{7,14}$/
}
const valForm = (e) => {
  switch (e.target.name) {
    case "nombre":
      if (expresiones.nombre.test(e.target.value)) {
        setSuccessFor(nombre);
      } else {
        setErrorFor(nombre, 'Por favor, rellena este campo. Recuerda que tu nombre NO puede estar compuesto por números o caracteres especiales.'); 
      }
      break;
    case "email":
      if (expresiones.email.test(e.target.value)) {
        setSuccessFor(email);
      } else {
        setErrorFor(email, 'Por favor, rellena este campo. Recuerda introducir una dirección de correo electrónico valida.'); 
      }
      break;
    case "celular":
      if (expresiones.celular.test(e.target.value)) {
        setSuccessFor(celular);
      } else {
        setErrorFor(celular, 'Por favor, rellena este campo. Recuerda introducir un número de celular valido.'); 
      }
      break;
  }
}
inputs.forEach((input) => {
  input.addEventListener('keyup', valForm);
  input.addEventListener('blur', valForm);
});
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
  formControl.className = 'formControl error';
}
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'formControl success'; 
}
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function isPhone(number) {
  return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(number)  
}