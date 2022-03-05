// https://api.chucknorris.io/

// https://excuser.herokuapp.com/
var chuckNorrisEl = document.querySelector("#btn1");
var excusesEl = document.querySelector("#btn2");

var getExcuse = function (excuse) {
    
    var excuseApi = `https://excuser.herokuapp.com/v1/excuse`

    fetch(excuseApi).then(function (response){
        if (response.ok) {
            response.json().then(function(data){
                console.log(data);
            });
        }
        else {
            alert('There was a problem with your request!')
        }
    });

};
getExcuse();

excusesEl.addEventListener("click", getExcuse);




var getJoke = function (joke) {
 
    var jokeApi = `https://api.chucknorris.io/jokes/random/?q=value`

    fetch(jokeApi).then(function (response){
        if (response.ok) {
            response.json().then(function(data){
                console.log(data);
            });
        }
        else {
            alert('There was a problem with your request!')
        }
    });

};
getJoke();

chuckNorrisEl = document.querySelector("click", getJoke);
