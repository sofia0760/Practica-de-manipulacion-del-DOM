// CAMBIAR CONTENIDOS A ELEMENTOS UNICOS

const cajaUnica = document.getElementById ('caja-unica');
const titulo =document.querySelector ('#titulo2');

cajaUnica.innerText = "cambio en el texto  #1 con innerText";
cajaUnica.innerHTML = "cambio en el texto #2 con inneHTML";
cajaUnica.textContent = "cambio en el texto #3 con textContent";

titulo.textContent = "Manipulación de Estilos CSS y Clases";

// CAMBIAR CONTENIDOS A ELEMENTOS MULTIPLES
const cajas = document.querySelectorAll('.caja-contenidos');

cajas.forEach((caja, index)=> {
    caja.textContent = "Caja Multiple número " + index;
    caja.style.color = "purple";
    caja.style.fontSize = "20px";
    caja.style.textAlign = "right";
    caja.style.background = "pink";
   
    
});
