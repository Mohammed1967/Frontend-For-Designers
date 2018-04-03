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
        var myPara3 = document.createElement('span');
        var myPara4 = document.createElement('span');
        var myPara5 = document.createElement('span');


        myH1.textContent = movies[i].title;
        myImg.src = movies[i].cover;
        myPara1.textContent = movies[i].simple_plot;
        myPara2.textContent = movies[i].genres;
        myPara3.textContent = movies[i].release_date;
        myPara4.textContent = movies[i].actors.actor_name;
        myPara5.textContent = movies[i].reviews;

        myArticle.appendChild(myH1);
        myArticle.appendChild(myImg);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myPara5);

        section.appendChild(myArticle);
    }
};
