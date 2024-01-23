const img_url = "https://image.tmdb.org/t/p/w500"


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
getTodaystrendingMovies("https://api.themoviedb.org/3/trending/movie/day?api_key=ca096e1e99b3e15214497ebe2b2a58f9&page=1")
function getTodaystrendingMovies(url) {
    fetch(url).then(res => res.json()).then(data =>{
        showTodaystrendingMovies(data.results)
    })    
}
function showTodaystrendingMovies(data) {

    a.innerHTML=""

    data.forEach((movie) => {
        const{poster_path , release_date ,id , overview , vote_average , title}=movie

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



const b = document.getElementsByClassName("movie-list")[1]
getweeklyTrendingMovies("https://api.themoviedb.org/3/trending/movie/day?api_key=ca096e1e99b3e15214497ebe2b2a58f9&page=10")
function getweeklyTrendingMovies(url) {
    fetch(url).then(res => res.json()).then(data =>{
        showweeklyTrendingMovies(data.results)
    })    
}
function showweeklyTrendingMovies(data) {

    b.innerHTML=""

    data.forEach((movie) => {
        const{poster_path , release_date,id  , overview , vote_average , title}=movie

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


const c = document.getElementsByClassName("movie-list")[2]
getpopularMovies("https://api.themoviedb.org/3/trending/movie/week?api_key=ca096e1e99b3e15214497ebe2b2a58f9&page=100")
function getpopularMovies(url) {
    fetch(url).then(res => res.json()).then(data =>{
        showpopularMovies(data.results)
    })    
}
function showpopularMovies(data) {

    c.innerHTML=""

    data.forEach((movie) => {
        const{poster_path , release_date,id  , overview , vote_average , title}=movie

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


const d = document.getElementsByClassName("movie-list")[3]
gethindiMovies("https://api.themoviedb.org/3/trending/tv/day?api_key=ca096e1e99b3e15214497ebe2b2a58f9&page=5")
function gethindiMovies(url) {
    fetch(url).then(res => res.json()).then(data =>{
        showhindiMovies(data.results)
    })    
}
function showhindiMovies(data) {

    d.innerHTML=""

    data.forEach((movie) => {
        const{poster_path , release_date ,id , overview , vote_average , name}=movie

        const movieItem = document.createElement("div")
        movieItem.classList.add("movie-item")
        movieItem.innerHTML=`
        <img class="movie-image" src="${img_url + poster_path}" onclick="getwebseriesDetails(${id})">
        <div class="description" onclick="getwebseriesDetails(${id})">
            <div class="name">${name}</div>
            <div class="overview">${overview}</div>
            <div class="watch"><button>Watch</button><span class="${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average.toFixed(1)}</span></div>
        </div>
        <div class="movie-name" onclick="getwebseriesDetails(${id})">${name}</div>
        <div class="ratingAndYear" onclick="getwebseriesDetails(${id})">
            <div class="rating ${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average.toFixed(1)}</div>
            
        </div>
        `
        
        d.appendChild(movieItem)

    });    
}


const e = document.getElementsByClassName("movie-list")[4]
getbengaliMovies("https://api.themoviedb.org/3/trending/tv/day?api_key=ca096e1e99b3e15214497ebe2b2a58f9&page=8")
function getbengaliMovies(url) {
    fetch(url).then(res => res.json()).then(data =>{
        showbengaliMovies(data.results)
    })    
}
function showbengaliMovies(data) {

    e.innerHTML=""

    data.forEach((movie) => {
        const{poster_path , release_date,id  , overview , vote_average , name}=movie

        const movieItem = document.createElement("div")
        movieItem.classList.add("movie-item")
        movieItem.innerHTML=`
        <img class="movie-image" src="${img_url + poster_path}" onclick="getwebseriesDetails(${id})">
        <div class="description" onclick="getwebseriesDetails(${id})">
            <div class="name">${name}</div>
            <div class="overview">${overview}</div>
            <div class="watch"><button>Watch</button><span class="${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average.toFixed(1)}</span></div>
        </div>
        <div class="movie-name" onclick="getwebseriesDetails(${id})">${name}</div>
        <div class="ratingAndYear" onclick="getwebseriesDetails(${id})">
            <div class="rating ${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average.toFixed(1)}</div>
           
        </div>
        `
        
        e.appendChild(movieItem)

    });    
}


const f = document.getElementsByClassName("movie-list")[5]
gettamilMovies("https://api.themoviedb.org/3/trending/tv/week?api_key=ca096e1e99b3e15214497ebe2b2a58f9&page=10")
function gettamilMovies(url) {
    fetch(url).then(res => res.json()).then(data =>{
        showtamilMovies(data.results)
    })    
}
function showtamilMovies(data) {

    f.innerHTML=""

    data.forEach((movie) => {
        const{poster_path , release_date,id  , overview , vote_average , name}=movie

        const movieItem = document.createElement("div")
        movieItem.classList.add("movie-item")
        movieItem.innerHTML=`
        <img class="movie-image" src="${img_url + poster_path}" onclick="getwebseriesDetails(${id})">
        <div class="description" onclick="getwebseriesDetails(${id})">
            <div class="name">${name}</div>
            <div class="overview">${overview}</div>
            <div class="watch"><button>Watch</button><span class="${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average.toFixed(1)}</span></div>
        </div>
        <div class="movie-name" onclick="getwebseriesDetails(${id})">${name}</div>
        <div class="ratingAndYear" onclick="getwebseriesDetails(${id})">
            <div class="rating ${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average.toFixed(1)}</div>
            
        </div>
        `
        
        f.appendChild(movieItem)

    });    
}
   

// javascrpit for searching movie

let search = document.getElementById("search")
let form = document.getElementById("form")
const change = document.querySelector("body")
 

b.style.height = "0";
c.style.height = "0";
e.style.height = "0";
f.style.height = "0";

b.style.marginBottom = "0";
c.style.marginBottom = "0";
e.style.marginBottom = "0";
f.style.marginBottom = "0";

b.style.paddingTop = "0";
c.style.paddingTop = "0";
e.style.paddingTop = "0";
f.style.paddingTop = "0";

let load1 = document.getElementsByClassName("load-more")[0]
let clickCount1 = 1
load1.addEventListener("click" , ()=>{
    
    if(clickCount1 == 1){
        b.style.height = "auto"
        b.style.paddingTop = "15px";
    }
    else if( clickCount1 == 2){
        c.style.height = "auto"
        c.style.paddingTop = "15px";
        load1.style.display = "none"
    }
    
    clickCount1 ++
})


let load2 = document.getElementsByClassName("load-more")[1]
let clickCount2 = 1
load2.addEventListener("click" , ()=>{
    
    if(clickCount2 == 1){
        e.style.height = "auto"
        e.style.paddingTop = "15px";
    }
    else if( clickCount2 == 2){
        f.style.height = "auto"
        f.style.paddingTop = "15px";
        load2.style.display = "none"
    }
    
    clickCount2 ++
})


window.addEventListener("load" , ()=>{
    clickCount1 = 1
    clickCount2 = 1
})

function getMovieDetails(movieid){
    window.localStorage.setItem("movieid" , String(movieid))
    window.location = "movie-detail.html"
  }
function getwebseriesDetails(seriesid){
    window.localStorage.setItem("seriesid" , String(seriesid))
    window.location = "series-detail.html"
  }

function gethomepage() {
    window.location = "index.html"
}

let account = document.getElementsByClassName("account")[0]
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