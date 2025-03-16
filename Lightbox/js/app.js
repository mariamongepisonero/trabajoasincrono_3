'use strict'

// Seleccionar primero el contenedor UL para no usar document
const contenedor = document.querySelector('.contenedor'),
    ul = contenedor.querySelector('.ul'),
    lightbox = contenedor.querySelector('.lightbox'),
    grande = contenedor.querySelector('.grande'),
    cerrar = contenedor.querySelector('.cerrar');

// Función Handle del click en imágenes
const handleImageClick = (e) => {
    e.preventDefault(); // Para que no recargue la página

    // Obtener la imagen dentro del enlace clicado
    const { src } = e.currentTarget.querySelector('.img');

    // Mostrar el lightbox y cambiar la imagen
    lightbox.classList.add('activo');
    grande.src = src;
};

// Asignar evento de click a todos los enlaces de UL
ul.querySelectorAll('.a').forEach(a => a.addEventListener('click', handleImageClick));

// Función para cerrar el lightbox
const closeLightbox = () => lightbox.classList.remove('activo');

// Asignar evento de click al botón de cerrar
cerrar.addEventListener('click', closeLightbox);