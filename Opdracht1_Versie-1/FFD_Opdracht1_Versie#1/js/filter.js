// var document;

/* Selecteer elementen */
var sectionrood = document.querySelector('section.rood');
var sectionrood1 = document.querySelector('section.rood1');
var sectionrood2 = document.querySelector('section.rood2');
var sectiongroen = document.querySelector('section.groen');
var sectiongroen1 = document.querySelector('section.groen1');

var sectionblauw1 = document.querySelector('section.blauw1');
var sectionblauw2 = document.querySelector('section.blauw2');
var sectionblauw3 = document.querySelector('section.blauw3');
var sectionblauw4 = document.querySelector('section.blauw4');
var sectiongroen = document.querySelector('section.groen');
var sectiongroen1 = document.querySelector('section.groen1');

var sectionblauw1 = document.querySelector('section.blauw1');
var sectionblauw2 = document.querySelector('section.blauw2');
var sectionblauw3 = document.querySelector('section.blauw3');
var sectionblauw4 = document.querySelector('section.blauw4');
var sectionrood = document.querySelector('section.rood');
var sectionrood1 = document.querySelector('section.rood1');
var sectionrood2 = document.querySelector('section.rood2');

var button1 = document.querySelector('section > button1');
var button2 = document.querySelector('section > button2');
var button3 = document.querySelector('section > button3');



  /* Toggle een class op een element */
function filterblauw () {
    sectionrood.classList.toggle('verdwijnrood');
    sectionrood1.classList.toggle('verdwijnrood');
    sectionrood2.classList.toggle('verdwijnrood');
    sectiongroen.classList.toggle('verdwijngroen');
    sectiongroen1.classList.toggle('verdwijngroen');
};

function filterrood() {
    sectionblauw1.classList.toggle('verdwijnblauw');
    sectionblauw2.classList.toggle('verdwijnblauw');
    sectionblauw3.classList.toggle('verdwijnblauw');
    sectionblauw4.classList.toggle('verdwijnblauw');
    sectiongroen.classList.toggle('verdwijngroen');
    sectiongroen1.classList.toggle('verdwijngroen');

};

function filtergroen() {
    sectionblauw1.classList.toggle('verdwijnblauw');
    sectionblauw2.classList.toggle('verdwijnblauw');
    sectionblauw3.classList.toggle('verdwijnblauw');
    sectionblauw4.classList.toggle('verdwijnblauw');
    sectionrood.classList.toggle('verdwijnrood');
    sectionrood1.classList.toggle('verdwijnrood');
    sectionrood2.classList.toggle('verdwijnrood');

};


/* Voeg een event aan element */
button1.addEventListener('click', filterblauw);
button2.addEventListener('click', filterrood);
button3.addEventListener('click', filtergroen);
