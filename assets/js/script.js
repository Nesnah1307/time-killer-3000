// https://api.chucknorris.io/

// https://excuser.herokuapp.com/
var chuckNorrisEl = document.querySelector("#btn1");
var excusesEl = document.querySelector("#btn2");
var saveBtn = document.querySelector('#btn3');






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


const displayJoke = (data) => {
    let jokeDisplayEl = document.getElementById('jokeDisplay');
    jokeDisplayEl.textContent = ''
    let joke = data.value;
    jokeDisplayEl.append(joke);
};

const displayExcuse = (data) => {
    let excuseDisplayEl = document.getElementById('excuseDisplay');
    excuseDisplayEl.textContent = ''
    let excuse = data[0].excuse
    excuseDisplayEl.append(excuse);  
};




const saveExcuse = () => {
    localStorage.setItem('Excuses', $('#excuseDisplay').text());
};

const loadExcuse = () => {
    localStorage.getItem('Excuses',$('#excuseDisplay').text());
};


excusesEl.addEventListener("click", getExcuse);
chuckNorrisEl.addEventListener("click", getJoke);
saveBtn.addEventListener("click", saveExcuse);
loadExcuse();