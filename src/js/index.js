'use strict'

const menuMobileContainer = document.querySelector('.menu--mobile');
const hambuMobile = menuMobileContainer.querySelector('.hambu__hambu');
const rootELement = document.querySelector(':root');

const toggleMenuMobile = () => menuMobileContainer.classList.toggle('active');

// check if the page "quienes" is active 

const handlePages = () => {
    const currentURL = window.location.href;
    if (currentURL.match('Quienes.html')) rootELement.style.setProperty('--white', '#AAA');
    else rootELement.style.setProperty('--white', '#fff');
} 

hambuMobile.addEventListener('click', toggleMenuMobile)
window.addEventListener('load', handlePages)



// Simulacion de tiempo de carga de la página (en milisegundos)
const tiempoDeCarga = 3000;

// Esperar a que todo el contenido de la página esté cargado
document.addEventListener("DOMContentLoaded", function () {
  // Simula la carga de la página
  setTimeout(function () {
    // Oculta el preloader
    document.getElementById("preloader").style.display = "none";
  }, tiempoDeCarga);
});