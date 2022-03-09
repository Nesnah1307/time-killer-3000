
// APIs
// https://api.chucknorris.io/
// https://excuser.herokuapp.com/
var chuckNorrisEl = document.querySelector("#btn1");
var excusesEl = document.querySelector("#btn2");
var saveBtn = document.querySelector('#btn3');

// API fetch function for excuses
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

// API request for Chuck Norris Joke
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

// Displays the joke to the page
const displayJoke = (data) => {
    let jokeDisplayEl = document.getElementById('jokeDisplay');
    jokeDisplayEl.textContent = ''
    let joke = data.value;
    jokeDisplayEl.append(joke);
};

// Displays the excuse to the page
const displayExcuse = (data) => {
    let excuseDisplayEl = document.getElementById('excuseDisplay');
    excuseDisplayEl.textContent = ''
    let excuse = data[0].excuse
    excuseDisplayEl.append(excuse);  
};

// Local Storage nonsense
const saveExcuse = () => {
    localStorage.setItem('Excuses', $('#excuseDisplay').text());
};

const loadExcuse = () => {
    localStorage.getItem('Excuses',$('#excuseDisplay').text());
};

// Event Listeners
excusesEl.addEventListener("click", getExcuse);
chuckNorrisEl.addEventListener("click", getJoke);
saveBtn.addEventListener("click", saveExcuse);
loadExcuse();