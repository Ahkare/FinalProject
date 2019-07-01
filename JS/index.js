////////////////
// Index Links//
////////////////

const celestePage = document.getElementById('celestediv');
const personaPage = document.getElementById('personadiv');
const zeldaPage = document.getElementById('zeldadiv');
const celesteDim = document.querySelector('dim-videoceleste');

celestePage.addEventListener('mouseenter', () => {
    celesteDim.style.display = 'none';
});

celestePage.addEventListener('mouseleave', () => {
    celesteDim.style.display = 'block';
});




////////////
// NAVBAR //
////////////
const navBar = document.getElementsByTagName('nav')
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    //active la nav au click
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        //Animation des liens
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.4}s`;

            }
        });
    });
}
navSlide();
/////////////
// Burgers //
/////////////
let burgerIcon = 'open'
function changeBurger() {
    let image = document.getElementById('celeste-menu-icon')
    if (burgerIcon == 'open') {
        image.src = "../ressources/Celeste/x.png"
        burgerIcon = 'close'
    } else {
        image.src = "../ressources/Celeste/journal.png"
        burgerIcon = 'open'
    }
}

function changeBurgerPersona() {
    let image = document.getElementById('persona-menu-icon')
    if (burgerIcon == 'open') {
        image.src = "../ressources/Persona/exit_btn.png"
        burgerIcon = 'close'
    } else {
        image.src = "../ressources/Persona/menu_btn.png"
        burgerIcon = 'open'
    }
}

function changeBurgerZelda() {
    let image = document.getElementById('zelda-menu-icon')
    if (burgerIcon == 'open') {
        image.src = "../ressources/Zelda/linkspin.gif"
        burgerIcon = 'close'
    } else {
        image.src = "../ressources/Zelda/linknospin.png"
        burgerIcon = 'open'
    }
}


///////////////////////
//TextBox for Celeste//
///////////////////////



let boxTracker = 'box1';

function changetextbox() {
    let text = document.getElementById('textboxtext');
    let image = document.getElementById('textboximg');
    let textArray = ['This is also a test and i really wanna see what happens now', 'This is a text box, i shall test things in my text test box and see if the testing is in a great text environment']
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    function type() {
        if (count === textArray.length) {
            count = 0;
        }
        currentText = textArray[count];
        letter = currentText.slice(0, ++index);
        textboxtext.textContent = letter;

        if (letter.length === currentText.length) {
            count++
        }

        setTimeout(type, 50);
    }
    if (boxTracker === 'box1') {
        image.src = "../ressources/Celeste/theo_thinking02.png";
        boxTracker = 'box2';
        //text.innerHTML = 'This is also a test and i really wanna see what happens now'
        type();
    } else {
        image.src = "../ressources/Celeste/madeline_distracted08.png";
        boxTracker = 'box1';
        //text.innerHTML = 'This is a text box, i shall test things in my text test box and see if the testing is in a great text environment'
        type();
    }
}


/*///////////////
/// Carousel in testing ///
////////////////

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Image Counter
let carouselCounter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * carouselCounter) + 'px)';

//Button events

nextBtn.addEventListener('click', () => {
    if (carouselCounter >= carouselImages.length -1) return;
    carouselSlide.style.transition = "transform 0.2s ease-in-out";
    carouselCounter++;
    carouselSlide.style.transform = 'translateX(' + (-size * carouselCounter) + 'px)';
    console.log(carouselCounter);
});

prevBtn.addEventListener('click', () => {
    if (carouselCounter <= 0) return;
    carouselSlide.style.transition = "transform 0.2s ease-in-out";
    carouselCounter--;
    carouselSlide.style.transform = 'translateX(' + (-size * carouselCounter) + 'px)';
    console.log(carouselCounter);
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[carouselCounter].id === 'lastClone'){
        carouselSlide.style.transition = "none"
        carouselCounter = carouselImages.length -2;
        carouselSlide.style.transform = 'translateX(' + (-size * carouselCounter) + 'px)';
    }

    if (carouselImages[carouselCounter].id === 'firstClone'){
        carouselSlide.style.transition = "none"
        carouselCounter = carouselImages.length -carouselCounter;
        carouselSlide.style.transform = 'translateX(' + (-size * carouselCounter) + 'px)';
    }
});
/////////////////////////////////////////////////////////*/

///////////////////////
// Persona animations//
///////////////////////

