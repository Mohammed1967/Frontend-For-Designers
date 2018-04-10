//*************************JSON*************************//

var header = document.querySelector('header');
var section = document.querySelector('section');

var requestURL = 'http://dennistel.nl/movies';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var movies = request.response;

    for (var i = 0; i < movies.length; i++) {
        var myArticle = document.createElement('article');
        var myH1 = document.createElement('h1');
        var myImg = document.createElement('img');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('span');
        var myPara3 = document.createElement('footer');
        // var directorTitle = document.createElement('footer');
//      var myPara4 = document.createElement('footer');

        myH1.textContent = movies[i].title;
        myImg.src = movies[i].cover;
        myPara1.textContent = movies[i].simple_plot;
        myPara2.textContent = movies[i].genres;
        myPara3.textContent = 'Release date: ' + movies[i].release_date;
        // article.classList = movies[i].genres[0] + ' ' + movies[i].genres[1] + ' ' + movies[i].genres[2];
        myArticle.appendChild(myH1);
        myArticle.appendChild(myImg);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        // myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        // myArticle.appendChild(directorTitle);
//        myArticle.appendChild(myPara4);
        section.appendChild(myArticle);
    }
};





//*************************Carousel*************************//

var foto1 = document.querySelector('.foto1');
var foto2 = document.querySelector('.foto2');
var foto3 = document.querySelector('.foto3');
var bol1 = document.querySelector('.bol1');
var bol2 = document.querySelector('.bol2');
var bol3 = document.querySelector('.bol3');
var counter = 1;
var vorige = document.querySelector('.vorige');
var volgende = document.querySelector('.volgende');

function next() {
    counter++;
    if (counter == 1) {
        foto1.classList.add('show');
        foto1.classList.remove('hide');
        foto2.classList.add('hide');
        foto2.classList.remove('show');
        foto3.classList.add('hide');
        foto3.classList.remove('show');

        bol1.classList.add('active');
        bol2.classList.remove('active');
        bol3.classList.remove('active');

    } else if (counter == 2) {
        foto2.classList.add('show');
        foto2.classList.remove('hide');
        foto1.classList.add('hide');
        foto1.classList.remove('show');
        foto3.classList.add('hide');
        foto3.classList.remove('show');

        bol2.classList.add('active');
        bol1.classList.remove('active');
        bol3.classList.remove('active');

    } else if (counter == 3) {
        foto3.classList.add('show');
        foto3.classList.remove('hide');
        foto1.classList.add('hide');
        foto1.classList.remove('show');
        foto2.classList.add('hide');
        foto2.classList.remove('show');

        bol3.classList.add('active');
        bol1.classList.remove('active');
        bol2.classList.remove('active');
        counter = 0;
    }
}

function back() {
    counter--;
    if (counter == 0) {
        counter = 3;
    }
    if (counter == 1) {
        foto1.classList.add('show');
        foto1.classList.remove('hide');
        foto2.classList.add('hide');
        foto2.classList.remove('show');
        foto3.classList.add('hide');
        foto3.classList.remove('show');

        bol1.classList.add('active');
        bol2.classList.remove('active');
        bol3.classList.remove('active');
    } else if (counter == 2) {
        foto2.classList.add('show');
        foto2.classList.remove('hide');
        foto1.classList.add('hide');
        foto1.classList.remove('show');
        foto3.classList.add('hide');
        foto3.classList.remove('show');

        bol2.classList.add('active');
        bol1.classList.remove('active');
        bol3.classList.remove('active');
    } else if (counter == 3) {
        foto3.classList.add('show');
        foto3.classList.remove('hide');
        foto1.classList.add('hide');
        foto1.classList.remove('show');
        foto2.classList.add('hide');
        foto2.classList.remove('show');

        bol3.classList.add('active');
        bol1.classList.remove('active');
        bol2.classList.remove('active');
    }
}

// Bollen //

function bol1_function() {
    foto1.classList.remove('show');
    foto1.classList.remove('hide');
    foto2.classList.remove('show');
    foto2.classList.remove('hide');
    foto3.classList.remove('show');
    foto3.classList.remove('hide');

    foto1.classList.add('show');
    foto2.classList.add('hide');
    foto3.classList.add('hide');

    bol1.classList.add('active');
    bol2.classList.remove('active');
    bol3.classList.remove('active');
    counter = 1;
}


function bol2_function() {
    foto1.classList.remove('show');
    foto1.classList.remove('hide');
    foto2.classList.remove('show');
    foto2.classList.remove('hide');
    foto3.classList.remove('show');
    foto3.classList.remove('hide');

    foto1.classList.add('hide');
    foto2.classList.add('show');
    foto3.classList.add('hide');

    bol1.classList.remove('active');
    bol2.classList.add('active');
    bol3.classList.remove('active');
    counter = 2;
}

function bol3_function() {
    foto1.classList.remove('show');
    foto1.classList.remove('hide');
    foto2.classList.remove('show');
    foto2.classList.remove('hide');
    foto3.classList.remove('show');
    foto3.classList.remove('hide');

    foto1.classList.add('hide');
    foto2.classList.add('hide');
    foto3.classList.add('show');

    bol1.classList.remove('active');
    bol2.classList.remove('active');
    bol3.classList.add('active');
    counter = 3;
}

volgende.addEventListener('click', next);
vorige.addEventListener('click', back);

window.addEventListener('keydown', function (e) {
    if (37 == e.keyCode) {
        back();
    } else if (39 == e.keyCode) {
        next();
    }
});

bol1.addEventListener('click', bol1_function);
bol2.addEventListener('click', bol2_function);
bol3.addEventListener('click', bol3_function);
