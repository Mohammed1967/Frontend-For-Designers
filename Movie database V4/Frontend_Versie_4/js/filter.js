
var all_filter = document.querySelector('input#all');
var action_filter = document.querySelector('input#action');
var adventure_filter = document.querySelector('input#adventure');
var crime_filter = document.querySelector('input#crime');
var drama_filter = document.querySelector('input#drama');
var horror_filter = document.querySelector('input#horror');
var thriller_filter = document.querySelector('input#thriller');

var moviearticles;

function all_functie() {
  all_filter.checked = true;
  var articles = document.querySelectorAll('article');
  for (moviearticles = 0; moviearticles < articles.length; moviearticles++) {
    articles[moviearticles].style.display = "block";
  }
}

function action_functie() {
  action_filter.checked = true;
  var articles = document.querySelectorAll('article');
  for (moviearticles = 0; moviearticles < articles.length; moviearticles++) {
    if (articles[moviearticles].classList.contains('Action')) {
      articles[moviearticles].style.display = "block";
    } else {
      articles[moviearticles].style.display = "none";
    }
  }
}

function adventure_functie() {
  adventure_filter.checked = true;
  var articles = document.querySelectorAll('article');
  for (moviearticles = 0; moviearticles < articles.length; moviearticles++) {
    if (articles[moviearticles].classList.contains('Adventure')) {
      articles[moviearticles].style.display = "block";
    } else {
      articles[moviearticles].style.display = "none";
    }
  }
}

function crime_functie() {
  crime_filter.checked = true;
  var articles = document.querySelectorAll('article');
  for (moviearticles = 0; moviearticles < articles.length; moviearticles++) {
    if (articles[moviearticles].classList.contains('Crime')) {
      articles[moviearticles].style.display = "block";
    } else {
      articles[moviearticles].style.display = "none";
    }
  }
}

function drama_functie() {
  drama_filter.checked = true;
  var articles = document.querySelectorAll('article');
  for (moviearticles = 0; moviearticles < articles.length; moviearticles++) {
    if (articles[moviearticles].classList.contains('Drama')) {
      articles[moviearticles].style.display = "block";
    } else {
      articles[moviearticles].style.display = "none";
    }
  }
}

function horror_functie() {
  horror_filter.checked = true;
  var articles = document.querySelectorAll('article');
  for (moviearticles = 0; moviearticles < articles.length; moviearticles++) {
    if (articles[moviearticles].classList.contains('Horror')) {
      articles[moviearticles].style.display = "block";
    } else {
      articles[moviearticles].style.display = "none";
    }
  }
}

function thriller_functie() {
  thriller_filter.checked = true;
  var articles = document.querySelectorAll('article');
  for (moviearticles = 0; moviearticles < articles.length; moviearticles++) {
    if (articles[moviearticles].classList.contains('Thriller')) {
      articles[moviearticles].style.display = "block";
    } else {
      articles[moviearticles].style.display = "none";
    }
  }
}

action_filter.addEventListener('click', action_functie);
adventure_filter.addEventListener('click', adventure_functie);
crime_filter.addEventListener('click', crime_functie);
drama_filter.addEventListener('click', drama_functie);
horror_filter.addEventListener('click', horror_functie);
thriller_filter.addEventListener('click', thriller_functie);
all_filter.addEventListener('click', all_functie);
