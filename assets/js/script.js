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

   if (response.ok) {
        response.json().then(function(data) {
          displayIssues(data);
      
          // check if api has paginated issues
          if (response.headers.get("Link")) {
            console.log("repo has more than 30 issues");
          }
        });
      }


};
getExcuse();


var getJoke = function (excuse) {
 

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

   if (response.ok) {
        response.json().then(function(data) {
          displayIssues(data);
      
          // check if api has paginated issues
          if (response.headers.get("Link")) {
            console.log("repo has more than 30 issues");
          }
        });
      }


};
getJoke();
