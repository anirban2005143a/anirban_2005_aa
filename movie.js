const img_url = "https://image.tmdb.org/t/p/w500"
getTodaystrendingMovies("https://api.themoviedb.org/3/trending/movie/day?api_key=ca096e1e99b3e15214497ebe2b2a58f9")

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

const a = document.getElementsByClassName("movie-list")[0]
function getTodaystrendingMovies(url) {
    fetch(url).then(res => res.json()).then(data =>{
        showTodaystrendingMovies(data.results)
    })    
}
function showTodaystrendingMovies(data) {

    a.innerHTML=""

    data.forEach((movie) => {
        const{poster_path , release_date , overview , vote_average, id , title}=movie

        const movieItem = document.createElement("div")
        movieItem.classList.add("movie-item")
        movieItem.innerHTML=`
        <img class="movie-image" src="${img_url + poster_path}" onclick="getMovieDetails(${id})">
        <div class="description" onclick="getMovieDetails(${id})">
            <div class="name">${title}</div>
            <div class="overview">${overview}</div>
            <div class="watch"><button>Watch</button><span class="${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average.toFixed(1)}</span></div>
        </div>
        <div class="movie-name" onclick="getMovieDetails(${id})">${title}</div>
        <div class="ratingAndYear" onclick="getMovieDetails(${id})">
            <div class="rating ${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average.toFixed(1)}</div>
            <div class="year">${release_date.split("-")[0]}</div>
        </div>
        `
        
        a.appendChild(movieItem)

    });    
}


getweeklyTrendingMovies("https://api.themoviedb.org/3/trending/movie/week?api_key=ca096e1e99b3e15214497ebe2b2a58f9")
function getweeklyTrendingMovies(url) {
    fetch(url).then(res => res.json()).then(data =>{
        showweeklyTrendingMovies(data.results)
    })    
}
const b = document.getElementsByClassName("movie-list")[1]
function showweeklyTrendingMovies(data) {

    b.innerHTML=""

    data.forEach((movie) => {
        const{poster_path , release_date , overview , vote_average, id , title}=movie

        const movieItem = document.createElement("div")
        movieItem.classList.add("movie-item")
        movieItem.innerHTML=`
        <img class="movie-image" src="${img_url + poster_path}" onclick="getMovieDetails(${id})">
        <div class="description" onclick="getMovieDetails(${id})">
            <div class="name">${title}</div>
            <div class="overview">${overview}</div>
            <div class="watch"><button>Watch</button><span class="${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average.toFixed(1)}</span></div>
        </div>
        <div class="movie-name" onclick="getMovieDetails(${id})">${title}</div>
        <div class="ratingAndYear" onclick="getMovieDetails(${id})">
            <div class="rating ${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average.toFixed(1)}</div>
            <div class="year">${release_date.split("-")[0]}</div>
        </div>
        `
        
        b.appendChild(movieItem)

    });    
}


getpopularMovies("https://api.themoviedb.org/3/movie/top_rated?api_key=ca096e1e99b3e15214497ebe2b2a58f9")
function getpopularMovies(url) {
    fetch(url).then(res => res.json()).then(data =>{
        showpopularMovies(data.results)
    })    
}
const c = document.getElementsByClassName("movie-list")[2]
function showpopularMovies(data) {

    c.innerHTML=""

    data.forEach((movie) => {
        const{poster_path , release_date , overview , vote_average , id, title}=movie

        const movieItem = document.createElement("div")
        movieItem.classList.add("movie-item")
        movieItem.innerHTML=`
        <img class="movie-image" src="${img_url + poster_path}" onclick="getMovieDetails(${id})">
        <div class="description" onclick="getMovieDetails(${id})">
            <div class="name">${title}</div>
            <div class="overview">${overview}</div>
            <div class="watch"><button>Watch</button><span class="${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average.toFixed(1)}</span></div>
        </div>
        <div class="movie-name" onclick="getMovieDetails(${id})">${title}</div>
        <div class="ratingAndYear" onclick="getMovieDetails(${id})">
            <div class="rating ${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average.toFixed(1)}</div>
            <div class="year">${release_date.split("-")[0]}</div>
        </div>
        `
        
        c.appendChild(movieItem)

    });    
}


gethindiMovies("https://api.themoviedb.org/3/discover/movie?api_key=ca096e1e99b3e15214497ebe2b2a58f9&sort_by=popularity.desc&page=1&with_original_language=hi")
function gethindiMovies(url) {
    fetch(url).then(res => res.json()).then(data =>{
        showhindiMovies(data.results)
    })    
}
const d = document.getElementsByClassName("movie-list")[3]
function showhindiMovies(data) {

    d.innerHTML=""

    data.forEach((movie) => {
        const{poster_path , release_date , overview , vote_average , id, title}=movie

        const movieItem = document.createElement("div")
        movieItem.classList.add("movie-item")
        movieItem.innerHTML=`
        <img class="movie-image" src="${img_url + poster_path}" onclick="getMovieDetails(${id})">
        <div class="description" onclick="getMovieDetails(${id})">
            <div class="name">${title}</div>
            <div class="overview">${overview}</div>
            <div class="watch"><button>Watch</button><span class="${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average.toFixed(1)}</span></div>
        </div>
        <div class="movie-name" onclick="getMovieDetails(${id})">${title}</div>
        <div class="ratingAndYear" onclick="getMovieDetails(${id})">
            <div class="rating ${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average.toFixed(1)}</div>
            <div class="year">${release_date.split("-")[0]}</div>
        </div>
        `
        
        d.appendChild(movieItem)

    });    
}


getbengaliMovies("https://api.themoviedb.org/3/discover/movie?api_key=ca096e1e99b3e15214497ebe2b2a58f9&sort_by=popularity.desc&page=1&with_original_language=bn")
function getbengaliMovies(url) {
    fetch(url).then(res => res.json()).then(data =>{
        showbengaliMovies(data.results)
    })    
}
const e = document.getElementsByClassName("movie-list")[4]
function showbengaliMovies(data) {

    e.innerHTML=""

    data.forEach((movie) => {
        const{poster_path , release_date , overview , id, vote_average , title}=movie

        const movieItem = document.createElement("div")
        movieItem.classList.add("movie-item")
        movieItem.innerHTML=`
        <img class="movie-image" src="${img_url + poster_path}" onclick="getMovieDetails(${id})">
        <div class="description" onclick="getMovieDetails(${id})">
            <div class="name">${title}</div>
            <div class="overview">${overview}</div>
            <div class="watch"><button>Watch</button><span class="${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average.toFixed(1)}</span></div>
        </div>
        <div class="movie-name" onclick="getMovieDetails(${id})">${title}</div>
        <div class="ratingAndYear" onclick="getMovieDetails(${id})">
            <div class="rating ${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average.toFixed(1)}</div>
            <div class="year">${release_date.split("-")[0]}</div>
        </div>
        `
        
        e.appendChild(movieItem)

    });    
}


gettamilMovies("https://api.themoviedb.org/3/discover/movie?api_key=ca096e1e99b3e15214497ebe2b2a58f9&sort_by=popularity.desc&page=1&with_original_language=ta")
function gettamilMovies(url) {
    fetch(url).then(res => res.json()).then(data =>{
        showtamilMovies(data.results)
    })    
}
const f = document.getElementsByClassName("movie-list")[5]
function showtamilMovies(data) {

    f.innerHTML=""

    data.forEach((movie) => {
        const{poster_path , release_date , overview , id, vote_average , title}=movie

        const movieItem = document.createElement("div")
        movieItem.classList.add("movie-item")
        movieItem.innerHTML=`
        <img class="movie-image" src="${img_url + poster_path}" onclick="getMovieDetails(${id})">
        <div class="description" onclick="getMovieDetails(${id})">
            <div class="name">${title}</div>
            <div class="overview">${overview}</div>
            <div class="watch"><button>Watch</button><span class="${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average.toFixed(1)}</span></div>
        </div>
        <div class="movie-name" onclick="getMovieDetails(${id})">${title}</div>
        <div class="ratingAndYear" onclick="getMovieDetails(${id})">
            <div class="rating ${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average.toFixed(1)}</div>
            <div class="year">${release_date.split("-")[0]}</div>
        </div>
        `
        
        f.appendChild(movieItem)

    });    
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