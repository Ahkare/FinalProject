
////////////////
// Index Links//
////////////////

const celestePage = document.getElementById('celestediv');
const personaPage = document.getElementById('personadiv');
const zeldaPage = document.getElementById('zeldadiv');
const celesteDim = document.getElementById('dim-celeste');
const personaDim = document.getElementById('dim-persona');
const zeldaDim = document.getElementById('dim-zelda');

celestePage.addEventListener('mouseenter', i => {
    celesteDim.style.opacity = '0';
});

celestePage.addEventListener('mouseleave', i => {
    celesteDim.style.opacity = '1';
});

personaPage.addEventListener('mouseenter', i => {
    personaDim.style.opacity = '0';
});

personaPage.addEventListener('mouseleave', i => {
    personaDim.style.opacity = '1';
});

zeldaPage.addEventListener('mouseenter', i => {
    zeldaDim.style.opacity = '0';
});

zeldaPage.addEventListener('mouseleave', i => {
    zeldaDim.style.opacity = '1';
});

