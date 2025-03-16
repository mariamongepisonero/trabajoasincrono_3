'use strict'

// Seleccionamos primero el contenedor principal
const contenedor = document.querySelector('.contenedor'),
    lis = contenedor.querySelectorAll('.li'), // Seleccionamos los botones dentro del contenedor
    bloques = contenedor.querySelectorAll('.bloque'); // Seleccionamos los bloques de contenido


// Función Handle para el clic en los botones
const handleTabClick = (_, i) => {
    lis.forEach((li, j) => {
        // ClassList.toggle con condición para simplificar código
        li.classList.toggle('activo', j === i); // Activa botón 
        bloques[j].classList.toggle('activo', j === i); // Activa bloque 
    });
};
// Asignar el evento de clic a cada botón de la lista
lis.forEach((li, i) => li.addEventListener('click', e => handleTabClick(e, i)));