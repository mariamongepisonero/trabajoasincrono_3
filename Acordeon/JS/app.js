'use strict'

// Seleccionar primero el contenedor principal para no usar document
const acordeon = document.querySelector('.acordeon'),
    bloques = acordeon.querySelectorAll('.bloque'),
    titulos = acordeon.querySelectorAll('.h2');

// Función Handle del click en cada título
const handleClick = (e) => {
    // Quitar la clase 'activo' de todos los bloques
    bloques.forEach(b => b.classList.remove('activo'));

    // Añadir 'activo' al bloque del título clicado
    e.currentTarget.parentElement.classList.add('activo');
};

// Asignar el evento de click a todos los títulos H2
titulos.forEach(titulo => titulo.addEventListener('click', handleClick));