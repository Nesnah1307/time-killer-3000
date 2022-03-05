// https://api.chucknorris.io/

// https://excuser.herokuapp.com/
var chuckNorrisEl = document.querySelector("#btn1");
var excusesEl = document.querySelector("#btn2");

var getExcuse = function (excuse) {
    
    var excuseApi = `https://excuser.herokuapp.com/v1/excuse`

    fetch(excuseApi).then(function (response){
        if (response.ok) {
            response.json().then(function(data){
                // console.log(data);
                displayExcuse(data);
            });
        }
        else {
            alert('There was a problem with your request!')
        }
    });
};
getExcuse();









var getJoke = function (joke) {
 
    var jokeApi = `https://api.chucknorris.io/jokes/random`

    fetch(jokeApi).then(function (response){
        if (response.ok) {
            response.json().then(function(data){
                // console.log(data);
                displayJoke(data);
            });
        }
        else {
            alert('There was a problem with your request!')
        }
    });
};
getJoke();

const displayJoke = (data) => {
    let joke = data.value;
    console.log(joke);
};

const displayExcuse = (data) => {
    let excuse = data[0].excuse
    console.log(excuse);
};




const saveExcuse = () => {
    localStorage.setItem("Excuses", );
};

const loadExcuse = () => {
    localStorage.getItem("Excuses");
};


excusesEl.addEventListener("click", getExcuse);
chuckNorrisEl = document.querySelector("click", getJoke);

