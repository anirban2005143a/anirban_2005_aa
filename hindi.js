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



let movielist0 = document.getElementsByClassName("movie-list")[0]
getrecentmovies("https://api.themoviedb.org/3/discover/movie?api_key=ca096e1e99b3e15214497ebe2b2a58f9&sort_by=popularity.desc&page=1&with_original_language=hi")
function getrecentmovies(url) {
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data)
        showrecentmovies(data.results)
    })
}
function showrecentmovies(data) {

    movielist0.innerHTML=""

    data.forEach((movie) => {
        const{poster_path , id, release_date , overview , vote_average , title}=movie

        const movieItem = document.createElement("div")
        movieItem.classList.add("movie-item")
        movieItem.innerHTML=`
        <img class="movie-image" src="${img_url + poster_path}" onclick="getMovieDetails(${id})">
        <div class="description" onclick="getMovieDetails(${id})">
            <div class="name">${title}</div>
            <div class="overview">${overview}</div>
            <div class="watch"><button>Watch</button><span class="${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average}</span></div>
        </div>
        <div class="movie-name" onclick="getMovieDetails(${id})">${title}</div>
        <div class="ratingAndYear" onclick="getMovieDetails(${id})">
            <div class="rating ${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average}</div>
            <div class="year">${release_date.split("-")[0]}</div>
        </div>
        `
        
        movielist0.appendChild(movieItem)

    });    
}


let movielist1 = document.getElementsByClassName("movie-list")[1]
getanimationmovies("https://api.themoviedb.org/3/discover/movie?api_key=ca096e1e99b3e15214497ebe2b2a58f9&sort_by=popularity.desc&page=2&with_original_language=hi")
function getanimationmovies(url) {
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data)
        showanimationmovies(data.results)
    })
}
function showanimationmovies(data) {

    movielist1.innerHTML=""

    data.forEach((movie) => {
        const{poster_path, id , release_date , overview , vote_average , title}=movie

        const movieItem = document.createElement("div")
        movieItem.classList.add("movie-item")
        movieItem.innerHTML=`
        <img class="movie-image" src="${img_url + poster_path}" onclick="getMovieDetails(${id})">
        <div class="description" onclick="getMovieDetails(${id})">
            <div class="name">${title}</div>
            <div class="overview">${overview}</div>
            <div class="watch"><button>Watch</button><span class="${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average}</span></div>
        </div>
        <div class="movie-name" onclick="getMovieDetails(${id})">${title}</div>
        <div class="ratingAndYear" onclick="getMovieDetails(${id})">
            <div class="rating ${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average}</div>
            <div class="year">${release_date.split("-")[0]}</div>
        </div>
        `
        
        movielist1.appendChild(movieItem)

    });    
}


let movielist2 = document.getElementsByClassName("movie-list")[2]
getsciencemovies("https://api.themoviedb.org/3/discover/movie?api_key=ca096e1e99b3e15214497ebe2b2a58f9&sort_by=popularity.desc&page=3&with_original_language=hi")
function getsciencemovies(url) {
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data)
        showsciencemovies(data.results)
    })
}
function showsciencemovies(data) {

    movielist2.innerHTML=""

    data.forEach((movie) => {
        const{poster_path , id, release_date , overview , vote_average , title}=movie

        const movieItem = document.createElement("div")
        movieItem.classList.add("movie-item")
        movieItem.innerHTML=`
        <img class="movie-image" src="${img_url + poster_path}" onclick="getMovieDetails(${id})">
        <div class="description" onclick="getMovieDetails(${id})">
            <div class="name">${title}</div>
            <div class="overview">${overview}</div>
            <div class="watch"><button>Watch</button><span class="${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average}</span></div>
        </div>
        <div class="movie-name" onclick="getMovieDetails(${id})">${title}</div>
        <div class="ratingAndYear" onclick="getMovieDetails(${id})">
            <div class="rating ${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average}</div>
            <div class="year">${release_date.split("-")[0]}</div>
        </div>
        `
        
        movielist2.appendChild(movieItem)

    });    
}



let movielist3 = document.getElementsByClassName("movie-list")[3]
getromanticmovies("https://api.themoviedb.org/3/discover/movie?api_key=ca096e1e99b3e15214497ebe2b2a58f9&sort_by=popularity.desc&page=4&with_original_language=hi")
function getromanticmovies(url) {
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data)
        showromanticmovies(data.results)
    })
}
function showromanticmovies(data) {

    movielist3.innerHTML=""

    data.forEach((movie) => {
        const{poster_path , id, release_date , overview , vote_average , title}=movie

        const movieItem = document.createElement("div")
        movieItem.classList.add("movie-item")
        movieItem.innerHTML=`
        <img class="movie-image" src="${img_url + poster_path}" onclick="getMovieDetails(${id})">
        <div class="description" onclick="getMovieDetails(${id})">
            <div class="name">${title}</div>
            <div class="overview">${overview}</div>
            <div class="watch"><button>Watch</button><span class="${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average}</span></div>
        </div>
        <div class="movie-name" onclick="getMovieDetails(${id})">${title}</div>
        <div class="ratingAndYear" onclick="getMovieDetails(${id})">
            <div class="rating ${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average}</div>
            <div class="year">${release_date.split("-")[0]}</div>
        </div>
        `
        
        movielist3.appendChild(movieItem)

    });    
}


let movielist4 = document.getElementsByClassName("movie-list")[4]
gethindimovies("https://api.themoviedb.org/3/discover/movie?api_key=ca096e1e99b3e15214497ebe2b2a58f9&sort_by=popularity.desc&page=5&with_original_language=hi")
function gethindimovies(url) {
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data)
        showhindimovies(data.results)
    })
}
function showhindimovies(data) {

    movielist4.innerHTML=""

    data.forEach((movie) => {
        const{poster_path , id, release_date , overview , vote_average , title}=movie

        const movieItem = document.createElement("div")
        movieItem.classList.add("movie-item")
        movieItem.innerHTML=`
        <img class="movie-image" src="${img_url + poster_path}" onclick="getMovieDetails(${id})">
        <div class="description" onclick="getMovieDetails(${id})">
            <div class="name">${title}</div>
            <div class="overview">${overview}</div>
            <div class="watch"><button>Watch</button><span class="${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average}</span></div>
        </div>
        <div class="movie-name" onclick="getMovieDetails(${id})">${title}</div>
        <div class="ratingAndYear" onclick="getMovieDetails(${id})">
            <div class="rating ${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average}</div>
            <div class="year">${release_date.split("-")[0]}</div>
        </div>
        `
        
        movielist4.appendChild(movieItem)

    });    
}


let movielist5 = document.getElementsByClassName("movie-list")[5]
gettamilmovies1("https://api.themoviedb.org/3/discover/movie?api_key=ca096e1e99b3e15214497ebe2b2a58f9&sort_by=popularity.desc&page=6&with_original_language=hi")
function gettamilmovies1(url) {
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data)
        showtamilmovies1(data.results)
    })
}
function showtamilmovies1(data) {

    movielist5.innerHTML=""

    data.forEach((movie) => {
        const{poster_path , id, release_date , overview , vote_average , title}=movie

        const movieItem = document.createElement("div")
        movieItem.classList.add("movie-item")
        movieItem.innerHTML=`
        <img class="movie-image" src="${img_url + poster_path}" onclick="getMovieDetails(${id})">
        <div class="description" onclick="getMovieDetails(${id})">
            <div class="name">${title}</div>
            <div class="overview">${overview}</div>
            <div class="watch"><button>Watch</button><span class="${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average}</span></div>
        </div>
        <div class="movie-name" onclick="getMovieDetails(${id})">${title}</div>
        <div class="ratingAndYear" onclick="getMovieDetails(${id})">
            <div class="rating ${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average}</div>
            <div class="year">${release_date.split("-")[0]}</div>
        </div>
        `
        
        movielist5.appendChild(movieItem)

    });    
}


let movielist6 = document.getElementsByClassName("movie-list")[6]
gettamilmovies2("https://api.themoviedb.org/3/discover/movie?api_key=ca096e1e99b3e15214497ebe2b2a58f9&sort_by=popularity.desc&page=7&with_original_language=hi")
function gettamilmovies2(url) {
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data)
        showtamilmovies2(data.results)
    })
}
function showtamilmovies2(data) {

    movielist6.innerHTML=""

    data.forEach((movie) => {
        const{poster_path , id, release_date , overview , vote_average , title}=movie

        const movieItem = document.createElement("div")
        movieItem.classList.add("movie-item")
        movieItem.innerHTML=`
        <img class="movie-image" src="${img_url + poster_path}" onclick="getMovieDetails(${id})">
        <div class="description" onclick="getMovieDetails(${id})">
            <div class="name">${title}</div>
            <div class="overview">${overview}</div>
            <div class="watch"><button>Watch</button><span class="${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average}</span></div>
        </div>
        <div class="movie-name" onclick="getMovieDetails(${id})">${title}</div>
        <div class="ratingAndYear" onclick="getMovieDetails(${id})">
            <div class="rating ${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average}</div>
            <div class="year">${release_date.split("-")[0]}</div>
        </div>
        `
        
        movielist6.appendChild(movieItem)

    });    
}


let movielist7 = document.getElementsByClassName("movie-list")[7]
gettamilmovies3("https://api.themoviedb.org/3/discover/movie?api_key=ca096e1e99b3e15214497ebe2b2a58f9&sort_by=popularity.desc&page=8&with_original_language=hi")
function gettamilmovies3(url) {
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data)
        showtamilmovies3(data.results)
    })
}
function showtamilmovies3(data) {

    movielist7.innerHTML=""

    data.forEach((movie) => {
        const{poster_path, id , release_date , overview , vote_average , title}=movie

        const movieItem = document.createElement("div")
        movieItem.classList.add("movie-item")
        movieItem.innerHTML=`
        <img class="movie-image" src="${img_url + poster_path}" onclick="getMovieDetails(${id})">
        <div class="description" onclick="getMovieDetails(${id})">
            <div class="name">${title}</div>
            <div class="overview">${overview}</div>
            <div class="watch"><button>Watch</button><span class="${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average}</span></div>
        </div>
        <div class="movie-name" onclick="getMovieDetails(${id})">${title}</div>
        <div class="ratingAndYear" onclick="getMovieDetails(${id})">
            <div class="rating ${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average}</div>
            <div class="year">${release_date.split("-")[0]}</div>
        </div>
        `
        
        movielist7.appendChild(movieItem)

    });    
}


let movielist8 = document.getElementsByClassName("movie-list")[8]
gettamilmovies4("https://api.themoviedb.org/3/discover/movie?api_key=ca096e1e99b3e15214497ebe2b2a58f9&sort_by=popularity.desc&page=9&with_original_language=hi")
function gettamilmovies4(url) {
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data)
        showtamilmovies4(data.results)
    })
}
function showtamilmovies4(data) {

    movielist8.innerHTML=""

    data.forEach((movie) => {
        const{poster_path , id, release_date , overview , vote_average , title}=movie

        const movieItem = document.createElement("div")
        movieItem.classList.add("movie-item")
        movieItem.innerHTML=`
        <img class="movie-image" src="${img_url + poster_path}" onclick="getMovieDetails(${id})">
        <div class="description" onclick="getMovieDetails(${id})">
            <div class="name">${title}</div>
            <div class="overview">${overview}</div>
            <div class="watch"><button>Watch</button><span class="${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average}</span></div>
        </div>
        <div class="movie-name" onclick="getMovieDetails(${id})">${title}</div>
        <div class="ratingAndYear" onclick="getMovieDetails(${id})">
            <div class="rating ${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average}</div>
            <div class="year">${release_date.split("-")[0]}</div>
        </div>
        `
        
        movielist8.appendChild(movieItem)

    });    
}


let movielist9 = document.getElementsByClassName("movie-list")[9]
gettamilmovies5("https://api.themoviedb.org/3/discover/movie?api_key=ca096e1e99b3e15214497ebe2b2a58f9&sort_by=popularity.desc&page=10&with_original_language=hi")
function gettamilmovies5(url) {
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data)
        showtamilmovies5(data.results)
    })
}
function showtamilmovies5(data) {

    movielist9.innerHTML=""

    data.forEach((movie) => {
        const{poster_path , id, release_date , overview , vote_average , title}=movie

        const movieItem = document.createElement("div")
        movieItem.classList.add("movie-item")
        movieItem.innerHTML=`
        <img class="movie-image" src="${img_url + poster_path}" onclick="getMovieDetails(${id})">
        <div class="description" onclick="getMovieDetails(${id})">
            <div class="name">${title}</div>
            <div class="overview">${overview}</div>
            <div class="watch"><button>Watch</button><span class="${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average}</span></div>
        </div>
        <div class="movie-name" onclick="getMovieDetails(${id})">${title}</div>
        <div class="ratingAndYear" onclick="getMovieDetails(${id})">
            <div class="rating ${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average}</div>
            <div class="year">${release_date.split("-")[0]}</div>
        </div>
        `
        
        movielist9.appendChild(movieItem)

    });    
}


movielist1.style.height = "0";
movielist2.style.height = "0";
movielist3.style.height = "0";
movielist4.style.height = "0";
movielist5.style.height = "0";
movielist6.style.height = "0";
movielist7.style.height = "0";
movielist8.style.height = "0";
movielist9.style.height = "0";

let load = document.getElementsByClassName("load-more")[0]
let clickCount = 1
load.addEventListener("click" , ()=>{
    
    if(clickCount == 1){
        movielist1.style.height = "auto"
    }
    else if( clickCount == 2){
        movielist2.style.height = "auto"
    }
    else if( clickCount == 3){
        movielist3.style.height = "auto"
    }
    else if( clickCount == 4){
        movielist4.style.height = "auto"
    }
    else if( clickCount == 5){
        movielist5.style.height = "auto"
    }
    else if( clickCount == 6){
        movielist6.style.height = "auto"
    }
    else if( clickCount == 7){
        movielist7.style.height = "auto"
    }
    else if( clickCount == 8){
        movielist8.style.height = "auto"
    }
    else if( clickCount == 9){
        movielist9.style.height = "auto"
    }
    clickCount ++
})


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