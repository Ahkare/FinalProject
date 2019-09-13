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
        image.src = "ressources/Celeste/x.png"
        burgerIcon = 'close'
    } else {
        image.src = "ressources/Celeste/journal.png"
        burgerIcon = 'open'
    }
}

function changeBurgerPersona() {
    let image = document.getElementById('persona-menu-icon')
    if (burgerIcon == 'open') {
        image.src = "ressources/Persona/exit_btn.png"
        burgerIcon = 'close'
    } else {
        image.src = "ressources/Persona/menu_btn.png"
        burgerIcon = 'open'
    }
}

function changeBurgerZelda() {
    let image = document.getElementById('zelda-menu-icon')
    if (burgerIcon == 'open') {
        image.src = "ressources/Zelda/linkspin.gif"
        burgerIcon = 'close'
    } else {
        image.src = "ressources/Zelda/linknospin.png"
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

    if (boxTracker === 'box1') {
        image.src = "ressources/Celeste/theo_thinking02.png";
        boxTracker = 'box2';
        text.innerHTML = "Hey, what's wrong madeline ?";
    } else if (boxTracker === 'box2') {
        image.src = "ressources/Celeste/madeline_distracted04.png";
        boxTracker = 'box3';
        text.innerHTML = "Nothing, i'm just wondering where we are..";
    } else if (boxTracker === 'box3') {
        image.src = "ressources/Celeste/theo_excited04.png";
        boxTracker = 'box4';
        text.innerHTML = "Don't worry about it, we're on something called a 'website'.";
    } else if (boxTracker === 'box4') {
        image.src = "ressources/Celeste/madeline_normal04.png";
        boxTracker = 'box5';
        text.innerHTML = "Oh, i heard about this ! so people can see us right now online ?";
    } else if (boxTracker === 'box5') {
        image.src = "ressources/Celeste/theo_yolo03.png";
        boxTracker = 'box6';
        text.innerHTML = "Yeah they can, but we can't see them.";
    } else if (boxTracker === 'box6') {
        image.src = "ressources/Celeste/theo_thinking05.png";
        boxTracker = 'box7';
        text.innerHTML = "And sadly, our conversation is completely scripted.";
    } else if (boxTracker === 'box7') {
        image.src = "ressources/Celeste/madeline_upset05.png";
        boxTracker = 'box8';
        text.innerHTML = "I see, that's a bummer.";
    } else if (boxTracker === 'box8') {
        image.src = "ressources/Celeste/theo_serious04.png";
        boxTracker = 'box9';
        text.innerHTML = "Yes, but that's only because the creator made us like this.";
    } else if (boxTracker === 'box9') {
        image.src = "ressources/Celeste/theo_excited04.png";
        boxTracker = 'box10';
        text.innerHTML = "Maybe one day, we will have way more things to talk about";
    } else if (boxTracker === 'box10') {
        image.src = "ressources/Celeste/madeline_distracted04.png";
        boxTracker = 'box11';
        text.innerHTML = "Yeah but why are we here then ?";
    } else if (boxTracker === 'box11') {
        image.src = "ressources/Celeste/theo_thinking05.png";
        boxTracker = 'box12';
        text.innerHTML = "I don't know we just have to deal with it for now";
    } else if (boxTracker === 'box12') {
        image.src = "ressources/Celeste/theo_yolo03.png";
        boxTracker = 'box13';
        text.innerHTML = "And you have to deal with me too";
    } else if (boxTracker === 'box13') {
        image.src = "ressources/Celeste/madeline_angry00.png";
        boxTracker = 'box14';
        text.innerHTML = "...";
    } else {
        image.src = "ressources/Celeste/madeline_distracted08.png";
        boxTracker = 'box1';
        text.innerHTML = '...';
    }
}










///////////////
// TEST AREA //
///////////////

/*/////////////////////////
/// Carousel in testing ///
///////////////////////////

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons
const prevBtn = document.queySelector('#prevBtn');
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


    /* Typewriting effect, in the works
    let textArray = ["This is also a test and i really wanna see what happens now", 'This is a text box, i shall test things in my text test box and see if the testing is in a great text environment']
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
    }*/