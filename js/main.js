console.log(`js loaded`)


function moreMovies() {
    window.location = "/movies.html"
    }
    
    const buttonMovies = document.querySelector('.more-movies');
    if(buttonMovies){
        buttonMovies.addEventListener('click', moreMovies);
    }


function moreSeries() {
window.location = "/series.html"
}

const buttonSeries = document.querySelector('.more-series');
if(buttonSeries)
buttonSeries.addEventListener('click', moreSeries);





    function login() {
        alert(`You have signed in!`)
        window.location = "/home.html"
        }
        
        const buttonLogin = document.querySelector('.login-button');
        if(buttonLogin){
            buttonLogin.addEventListener('click', login);
        }

        function logOut() {
            alert(`You have logged out!!`)
            window.location = "/index.html"
            }
            
            const buttonLoggedOut = document.querySelector('.disney-icon');
            if(buttonLoggedOut){
                buttonLoggedOut.addEventListener('click', logOut);
            }
   
 


let watchlist = ["img movies/Schermafbeelding 2023-01-25 101107.png", "img movies/Schermafbeelding 2023-01-26 131756.png",   ];

if(localStorage.getItem("watch-list")){ // controleert of een watchlist bestaat
    watchlist = JSON.parse(localStorage.getItem("watch-list")); // haalt informatie in JSON formaat en formateert naar een javascript object.
}

function showMovie(){
    const watchListView = document.querySelector(".watch-list");
    if(watchListView){
        for (let i = 0; i < watchlist.length; i++) {
            const movie = watchlist[i];
            watchListView.innerHTML += `<img src="${movie}" >`
        
        }
    }
}
showMovie()


function addMovie(img){
    watchlist.push(img);
    localStorage.setItem("watch-list", JSON.stringify(watchlist));
}
function myFunction2() {
    window.location = "/movies.html"
    }
    
    const myBtn3 = document.querySelector('.series1');
    if(myBtn3){
        myBtn2.addEventListener('click', moreSeries);
    }