// Manipulamos de atributos 
const botonFacebook = document.getElementById('btn-facebook');
const imagenUnica = document.querySelector('#imagen-unica');

botonFacebook.innerHTML = '<img src="img/facebook.png">';
imagenUnica.setAttribute("alt", "texto alternativo modificado por javaScript");
botonFacebook.setAttribute ('href', 'https://www.facebook.com/');

