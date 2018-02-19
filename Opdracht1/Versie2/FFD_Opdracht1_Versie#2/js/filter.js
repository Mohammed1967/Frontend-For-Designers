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
    sectionrood.classList.add('verdwijnrood');
    sectionrood1.classList.add('verdwijnrood');
    sectionrood2.classList.add('verdwijnrood');
    sectiongroen.classList.add('verdwijngroen');
    sectiongroen1.classList.add('verdwijngroen');
    sectionblauw1.classList.remove('verdwijnblauw');
    sectionblauw2.classList.remove('verdwijnblauw');
    sectionblauw3.classList.remove('verdwijnblauw');
    sectionblauw4.classList.remove('verdwijnblauw');

};

function filterrood() {
    sectionblauw1.classList.add('verdwijnblauw');
    sectionblauw2.classList.add('verdwijnblauw');
    sectionblauw3.classList.add('verdwijnblauw');
    sectionblauw4.classList.add('verdwijnblauw');
    sectiongroen.classList.add('verdwijngroen');
    sectiongroen1.classList.add('verdwijngroen');
    sectionrood.classList.remove('verdwijnrood');
    sectionrood1.classList.remove('verdwijnrood');
    sectionrood2.classList.remove('verdwijnrood');

};

function filtergroen() {
    sectionblauw1.classList.add('verdwijnblauw');
    sectionblauw2.classList.add('verdwijnblauw');
    sectionblauw3.classList.add('verdwijnblauw');
    sectionblauw4.classList.add('verdwijnblauw');
    sectionrood.classList.add('verdwijnrood');
    sectionrood1.classList.add('verdwijnrood');
    sectionrood2.classList.add('verdwijnrood');
    sectiongroen.classList.remove('verdwijngroen');
    sectiongroen1.classList.remove('verdwijngroen');

};


/* Voeg een event aan element */
button1.addEventListener('click', filterblauw);
button2.addEventListener('click', filterrood);
button3.addEventListener('click', filtergroen);
