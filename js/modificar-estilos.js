// manipilación de estilos de un elemento unico
const estiloUnico = document.getElementById('estilo-unico');
estiloUnico.style.color = "black";
estiloUnico.style.fontSize = "20px";
estiloUnico.style.background ="purple";
estiloUnico.style.textAlign ="center";

// cambiar estilos a elementos multiples, teniendo en cuenta su contenedor padre, como en este caso es "estilos"

const  cajasEstilo = document.querySelectorAll(' #estilos .caja');

// manipulación de clases y estilos 
cajasEstilo.forEach((caja, index)=>{
    caja.style.border= "2px dashed blue";
})
estiloUnico.classList.add('active');