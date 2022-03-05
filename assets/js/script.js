// https://api.chucknorris.io/

// https://excuser.herokuapp.com/


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







var getJoke = function (joke) {
 
    var jokeApi = `https://api.chucknorris.io/jokes/random`

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




const saveExcuse = () => {
    localStorage.setItem("Excuses", );
};

const loadExcuse = () => {
    localStorage.getItem("Excuses");
};