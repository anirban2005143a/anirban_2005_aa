const api_key = "ca096e1e99b3e15214497ebe2b2a58f9"
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



// api link for new release movies
let a = document.getElementsByClassName("movie-list")[0]
geNewReleaseMovies("https://api.themoviedb.org/3/movie/now_playing?api_key=ca096e1e99b3e15214497ebe2b2a58f9")
function geNewReleaseMovies(url) {
  fetch(url).then(res => res.json()).then( data=>{
    console.log(data)
    showNewReleaseMovies(data.results)
  })
}
function showNewReleaseMovies(data) {

  a.innerHTML=""

  data.forEach((movie)=>{

    const{poster_path , overview , vote_average , title ,release_date ,id }=movie

    let movieItem = document.createElement("div")
    movieItem.classList.add("movie-item")
    movieItem.innerHTML=`
    <div class="movie-image"  onclick="getMovieDetails(${id})"><img src="${img_url + poster_path}"></div>
    <div class="movie-description"  onclick="getMovieDetails(${id})">
        <div class="heading">${title}</div>
        <div class="overview">${overview}</div>
        <div class="watch-rate"><button onclick="getMovieDetails(${id})">Watch</button><span class="${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #fbff00;"></i>&nbsp;${vote_average.toFixed(1)}</span></div>
    </div>
    <div class="movie-name-year-rate"  onclick="getMovieDetails(${id})">
        <div class="movie-name">${title}</div>
        <div class="rate-year">
            <div class="rate ${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #fbff00;"></i>&nbsp;${vote_average.toFixed(1)}</div>
            <div class="release-year">${release_date.split("-")[0]}</div>
        </div>
    </div>
    `

    a.appendChild(movieItem)

  })
  
}


// api link for weekly trending movies
let b = document.getElementsByClassName("movie-list")[1]
getWeeklyTrendingMovies("https://api.themoviedb.org/3/trending/movie/week?api_key=ca096e1e99b3e15214497ebe2b2a58f9")
function getWeeklyTrendingMovies(url) {
  fetch(url).then(res => res.json()).then( data=>{
    console.log(data)
    showWeeklyTrendingMovies(data.results)
  })
}
function showWeeklyTrendingMovies(data) {

  b.innerHTML=""

  data.forEach((movie)=>{

    const{poster_path , overview , vote_average , title ,release_date,id   }=movie

    let movieItem = document.createElement("div")
    movieItem.classList.add("movie-item")
    movieItem.innerHTML=`
    <div class="movie-image"  onclick="getMovieDetails(${id})"><img src="${img_url + poster_path}"></div>
    <div class="movie-description"  onclick="getMovieDetails(${id})">
        <div class="heading">${title}</div>
        <div class="overview">${overview}</div>
        <div class="watch-rate"><button onclick="getMovieDetails(${id})">Watch</button><span class="${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #fbff00;"></i>&nbsp;${vote_average.toFixed(1)}</span></div>
    </div>
    <div class="movie-name-year-rate"  onclick="getMovieDetails(${id})">
        <div class="movie-name">${title}</div>
        <div class="rate-year">
            <div class="rate ${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #fbff00;"></i>&nbsp;${vote_average.toFixed(1)}</div>
            <div class="release-year">${release_date.split("-")[0]}</div>
        </div>
    </div>
    `

    b.appendChild(movieItem)

  })
  
}



// api link for popular movies
let c = document.getElementsByClassName("movie-list")[2]
getpopularMovies("https://api.themoviedb.org/3/movie/popular?api_key=ca096e1e99b3e15214497ebe2b2a58f9")
function getpopularMovies(url) {
  fetch(url).then(res => res.json()).then( data=>{
    console.log(data)
    showpopularMovies(data.results)
  })
}
function showpopularMovies(data) {

  c.innerHTML=""

  data.forEach((movie)=>{

    const{poster_path , overview , vote_average , title ,release_date,id   }=movie

    let movieItem = document.createElement("div")
    movieItem.classList.add("movie-item")
    movieItem.innerHTML=`
    <div class="movie-image"  onclick="getMovieDetails(${id})"><img src="${img_url + poster_path}"></div>
    <div class="movie-description"  onclick="getMovieDetails(${id})">
        <div class="heading">${title}</div>
        <div class="overview">${overview}</div>
        <div class="watch-rate"><button onclick="getMovieDetails(${id})">Watch</button><span class="${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #fbff00;"></i>&nbsp;${vote_average.toFixed(1)}</span></div>
    </div>
    <div class="movie-name-year-rate"  onclick="getMovieDetails(${id})">
        <div class="movie-name">${title}</div>
        <div class="rate-year">
            <div class="rate ${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #fbff00;"></i>&nbsp;${vote_average.toFixed(1)}</div>
            <div class="release-year">${release_date.split("-")[0]}</div>
        </div>
    </div>
    `

    c.appendChild(movieItem)

  })
  
}



// api link for trending web-series movies
let d = document.getElementsByClassName("movie-list")[3]
gettrendingSeries("https://api.themoviedb.org/3/trending/tv/week?api_key=ca096e1e99b3e15214497ebe2b2a58f9")
function gettrendingSeries(url) {
  fetch(url).then(res => res.json()).then( data=>{
    console.log(data)
    showtrendingSeries(data.results)
  })
}
function showtrendingSeries(data) {

  d.innerHTML=""

  data.forEach((movie)=>{

    const{poster_path , overview , vote_average , original_name ,release_date ,id  }=movie

    let movieItem = document.createElement("div")
    movieItem.classList.add("movie-item" , "websries")
    movieItem.innerHTML=`
    <div class="movie-image"  onclick="getwebseriesDetails(${id})"><img src="${img_url + poster_path}"></div>
    <div class="movie-description"  onclick="getwebseriesDetails(${id})">
        <div class="heading">${ original_name}</div>
        <div class="overview">${overview}</div>
        <div class="watch-rate"><button onclick="getwebseriesDetails(${id})">Watch</button><span class="${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #fbff00;"></i>&nbsp;${vote_average.toFixed(1)}</span></div>
    </div>
    <div class="movie-name-year-rate"  onclick="getwebseriesDetails(${id})">
        <div class="movie-name">${original_name}</div>
        <div class="rate-year">
            <div class="rate ${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #fbff00;"></i>&nbsp;${vote_average.toFixed(1)}</div>
            
        </div>
    </div>
    `

    d.appendChild(movieItem)

  })
  
}



// api link for on the air web-series movies
let e = document.getElementsByClassName("movie-list")[4]
getOnTheAirSeries("https://api.themoviedb.org/3/tv/on_the_air?api_key=ca096e1e99b3e15214497ebe2b2a58f9")
function getOnTheAirSeries(url) {
  fetch(url).then(res => res.json()).then( data=>{
    console.log(data)
    showOnTheAirSeries(data.results)
  })
}
function showOnTheAirSeries(data) {

  e.innerHTML=""

  data.forEach((movie)=>{

    const{poster_path , overview , vote_average , original_name ,release_date ,id  }=movie

    let movieItem = document.createElement("div")
    movieItem.classList.add("movie-item" , "websries")
    movieItem.innerHTML=`
    <div class="movie-image"  onclick="getwebseriesDetails(${id})"><img src="${img_url + poster_path}"></div>
    <div class="movie-description"  onclick="getwebseriesDetails(${id})">
        <div class="heading">${original_name}</div>
        <div class="overview">${overview}</div>
        <div class="watch-rate"><button onclick="getwebseriesDetails(${id})">Watch</button><span class="${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #fbff00;"></i>&nbsp;${vote_average.toFixed(1)}</span></div>
    </div>
    <div class="movie-name-year-rate"  onclick="getwebseriesDetails(${id})">
        <div class="movie-name">${original_name}</div>
        <div class="rate-year">
            <div class="rate ${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #fbff00;"></i>&nbsp;${vote_average.toFixed(1)}</div>
            
        </div>
    </div>
    `

    e.appendChild(movieItem)

  })
  
}


// javascrpit for searching movie
let search = document.getElementById("search")
let form = document.getElementById("form")
const change = document.querySelector("body")


// javascript for scroll movielist by mouse wheel
let movielist = document.querySelectorAll(".movieList-slider");
let bannerButton = document.getElementsByClassName("slide-button")[0]

let p = movielist[0]
let q = movielist[1]
let r = movielist[2]
let s = movielist[3]
let t = movielist[4]
console.log(p)

// p.addEventListener("wheel", (e) => {
//     e.preventDefault();

//     const scrollpx = 40

//     if(e.deltaY > 0){
//       p.scrollLeft += scrollpx
//     }

//     else{
//       p.scrollLeft -= scrollpx
//     }
// })
// q.addEventListener("wheel", (e) => {
//     e.preventDefault();

//     const scrollpx = 40

//     if(e.deltaY > 0){
//       q.scrollLeft += scrollpx
//     }

//     else{
//       q.scrollLeft -= scrollpx
//     }
// })
// r.addEventListener("wheel", (e) => {
//     e.preventDefault();

//     const scrollpx = 40

//     if(e.deltaY > 0){
//       r.scrollLeft += scrollpx
//     }

//     else{
//       r.scrollLeft -= scrollpx
//     }
// })
// s.addEventListener("wheel", (e) => {
//     e.preventDefault();

//     const scrollpx = 40

//     if(e.deltaY > 0){
//       s.scrollLeft += scrollpx
//     }

//     else{
//       s.scrollLeft -= scrollpx
//     }
// })
// t.addEventListener("wheel", (e) => {
//     e.preventDefault();

//     const scrollpx = 40

//     if(e.deltaY > 0){
//       t.scrollLeft += scrollpx
//     }

//     else{
//       t.scrollLeft -= scrollpx
//     }
// })
// bannerButton.addEventListener("wheel", (e) => {
//     e.preventDefault();

//     const scrollpx = 40

//     if(e.deltaY > 0){
//       bannerButton.scrollLeft += scrollpx
//     }

//     else{
//       bannerButton.scrollLeft -= scrollpx
//     }
// })



function getMovieDetails(movieid){
  window.localStorage.setItem("movieid" , String(movieid))
  window.location = "movie-detail.html"
}
function getwebseriesDetails(seriesid){
  window.localStorage.setItem("seriesid" , String(seriesid))
  window.location = "series-detail.html"
}


function showMenuBar() {
  let menu = document.getElementsByClassName("sideNavBar")[0]
  menu.classList.toggle("active")
}
function showSearchBar(params) {
  window.location = "search.html"
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


function gethomepage() {
  window.location = "index.html"
}

