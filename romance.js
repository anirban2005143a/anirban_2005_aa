const img_url = "https://image.tmdb.org/t/p/w500"
getMovies("https://api.themoviedb.org/3/discover/movie?api_key=ca096e1e99b3e15214497ebe2b2a58f9&sort_by=popularity.desc&include_adult=false&with_genres=10749")

function getMovies(url) {
    fetch(url).then(res => res.json()).then(data =>{
        showMovies(data.results)
    })    
}

const a = document.getElementsByClassName("movie-list")[0]

function showMovies(data) {

    a.innerHTML=""

    data.forEach((movie) => {
        const{poster_path , release_date , overview , vote_average , title , id}=movie

        const movieItem = document.createElement("div")
        movieItem.classList.add("movie-item")
        movieItem.innerHTML=`
        <img class="movie-image"  onclick="getMovieDetails(${id})" src="${img_url + poster_path}">
        <div class="description"  onclick="getMovieDetails(${id})">
            <div class="name">${title}</div>
            <div class="overview">${overview}</div>
            <div class="watch"><button>Watch</button><span class="${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average}</span></div>
        </div>
        <div class="movie-name"  onclick="getMovieDetails(${id})">${title}</div>
        <div class="ratingAndYear"  onclick="getMovieDetails(${id})">
            <div class="rating ${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average}</div>
            <div class="year">${release_date.split("-")[0]}</div>
        </div>
        `
        
        a.appendChild(movieItem)

    });    
}

function getMovieDetails(movieid){
    window.localStorage.setItem("movieid" , String(movieid))
    window.location = "movie-detail.html"
}

function getcolour(input){
    if(input > 7){
        return "green";
    }
    else if(input > 5){
        return "orange"
    }
    else{
        return "red"
    }
}       

// javascrpit for searching movie

let search = document.getElementById("search")
let form = document.getElementById("form")
// const m = document.getElementsByClassName("movie-list-search")[0]
// let heading = document.getElementsByClassName("heading")[0]
const change = document.querySelector("body")

 
function getMovieDetails(movieid){
    window.localStorage.setItem("movieid" , String(movieid))
    window.location = "movie-detail.html"
  }

  function gethomepage() {
    window.location = "index.html"
  }
  
let account = document.getElementsByClassName("account")[0]
console.log(account)
let AccountSettings = document.getElementsByClassName("account-settings")[0]
console.log(AccountSettings)
console.log(account)
account.addEventListener("mouseover" , ()=>{
AccountSettings.style.width = "auto"
})
AccountSettings.addEventListener("mouseover" , ()=>{
AccountSettings.style.width = "auto"
})
AccountSettings.addEventListener("mouseout" , ()=>{
AccountSettings.style.width = 0
})  


function showMenuBar() {
  let menu = document.getElementsByClassName("sideNavBar")[0]
  menu.classList.toggle("active")
}
function showSearchBar(params) {
  window.location = "search.html"
}

let username = window.localStorage.getItem("username")
updateName.innerHTML=`${username}`