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
getrecentmovies("https://api.themoviedb.org/3/tv/popular?api_key=ca096e1e99b3e15214497ebe2b2a58f9")
function getrecentmovies(url) {
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data)
        showrecentmovies(data.results)
    })
}
function showrecentmovies(data) {

    movielist0.innerHTML=""

    data.forEach((movie) => {
        const{poster_path , release_date ,id , overview , vote_average , original_name}=movie

        const movieItem = document.createElement("div")
        movieItem.classList.add("movie-item")
        movieItem.innerHTML=`
        <img class="movie-image" src="${img_url + poster_path}" onclick="getwebseriesDetails(${id})">
        <div class="description" onclick="getwebseriesDetails(${id})">
            <div class="name">${original_name}</div>
            <div class="overview">${overview}</div>
            <div class="watch"><button>Watch</button><span class="${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average.toFixed(1)}</span></div>
        </div>
        <div class="movie-name" onclick="getwebseriesDetails(${id})">${original_name}</div>
        <div class="ratingAndYear" onclick="getwebseriesDetails(${id})">
            <div class="rating ${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average.toFixed(1)}</div>
            
        </div>
        `
        
        movielist0.appendChild(movieItem)

    });    
}


let movielist1 = document.getElementsByClassName("movie-list")[1]
getanimationmovies("https://api.themoviedb.org/3/tv/popular?api_key=ca096e1e99b3e15214497ebe2b2a58f9&page=2")
function getanimationmovies(url) {
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data)
        showanimationmovies(data.results)
    })
}
function showanimationmovies(data) {

    movielist1.innerHTML=""

    data.forEach((movie) => {
        const{poster_path , release_date , overview,id  , vote_average , original_name}=movie

        const movieItem = document.createElement("div")
        movieItem.classList.add("movie-item")
        movieItem.innerHTML=`
        <img class="movie-image" src="${img_url + poster_path}" onclick="getwebseriesDetails(${id})">
        <div class="description" onclick="getwebseriesDetails(${id})">
            <div class="name">${original_name}</div>
            <div class="overview">${overview}</div>
            <div class="watch"><button>Watch</button><span class="${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average.toFixed(1)}</span></div>
        </div>
        <div class="movie-name" onclick="getwebseriesDetails(${id})">${original_name}</div>
        <div class="ratingAndYear" onclick="getwebseriesDetails(${id})">
            <div class="rating ${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average.toFixed(1)}</div>
          
        </div>
        `
        
        movielist1.appendChild(movieItem)

    });    
}


let movielist2 = document.getElementsByClassName("movie-list")[2]
getsciencemovies("https://api.themoviedb.org/3/tv/top_rated?api_key=ca096e1e99b3e15214497ebe2b2a58f9&page=2$original_language=hi")
function getsciencemovies(url) {
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data)
        showsciencemovies(data.results)
    })
}
function showsciencemovies(data) {

    movielist2.innerHTML=""

    data.forEach((movie) => {
        const{poster_path , release_date , overview ,id , vote_average , original_name}=movie

        const movieItem = document.createElement("div")
        movieItem.classList.add("movie-item")
        movieItem.innerHTML=`
        <img class="movie-image" src="${img_url + poster_path}" onclick="getwebseriesDetails(${id})">
        <div class="description" onclick="getwebseriesDetails(${id})">
            <div class="name">${original_name}</div>
            <div class="overview">${overview}</div>
            <div class="watch"><button>Watch</button><span class="${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average.toFixed(1)}</span></div>
        </div>
        <div class="movie-name" onclick="getwebseriesDetails(${id})">${original_name}</div>
        <div class="ratingAndYear" onclick="getwebseriesDetails(${id})">
            <div class="rating ${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average.toFixed(1)}</div>
            
        </div>
        `
        
        movielist2.appendChild(movieItem)

    });    
}



let movielist3 = document.getElementsByClassName("movie-list")[3]
getromanticmovies("https://api.themoviedb.org/3/tv/top_rated?api_key=ca096e1e99b3e15214497ebe2b2a58f9&page=1")
function getromanticmovies(url) {
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data)
        showromanticmovies(data.results)
    })
}
function showromanticmovies(data) {

    movielist3.innerHTML=""

    data.forEach((movie) => {
        const{poster_path , release_date , overview ,id , vote_average , original_name}=movie

        const movieItem = document.createElement("div")
        movieItem.classList.add("movie-item")
        movieItem.innerHTML=`
        <img class="movie-image" src="${img_url + poster_path}" onclick="getwebseriesDetails(${id})">
        <div class="description" onclick="getwebseriesDetails(${id})">
            <div class="name">${original_name}</div>
            <div class="overview">${overview}</div>
            <div class="watch"><button>Watch</button><span class="${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average.toFixed(1)}</span></div>
        </div>
        <div class="movie-name" onclick="getwebseriesDetails(${id})">${original_name}</div>
        <div class="ratingAndYear" onclick="getwebseriesDetails(${id})">
            <div class="rating ${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #ffbb00;"></i>&nbsp;${vote_average.toFixed(1)}</div>
            
        </div>
        `
        
        movielist3.appendChild(movieItem)

    });    
}






movielist1.style.height = "0";
movielist2.style.height = "0";
movielist3.style.height = "0";

movielist1.style.marginBottom = "0";
movielist2.style.marginBottom = "0";
movielist3.style.marginBottom = "0";

movielist1.style.paddingTop = "0";
movielist2.style.paddingTop = "0";
movielist3.style.paddingTop = "0";


let load = document.getElementsByClassName("load-more")[0]
let clickCount = 1
load.addEventListener("click" , ()=>{
    
    if(clickCount == 1){
        movielist1.style.height = "auto"
        movielist1.style.marginBottom = "15px";
        movielist1.style.paddingTop = "15px";
    }
    else if( clickCount == 2){
        movielist2.style.height = "auto"
        movielist2.style.marginBottom = "15px";
        movielist2.style.paddingTop = "15px";
    }
    else if( clickCount == 3){
        movielist3.style.height = "auto"
        movielist3.style.marginBottom = "15px";
        movielist3.style.paddingTop = "15px";
        load.style.display = "none"
    }
    
    clickCount ++
})

window.addEventListener("load" , ()=>{
    clickCount = 1
})


// javascrpit for searching movie

let search = document.getElementById("search")
let form = document.getElementById("form")
// const m = document.getElementsByClassName("movie-list-search")[0]
// let heading = document.getElementsByClassName("heading")[0]
const change = document.querySelector("body")

 
function getwebseriesDetails(seriesid){
    window.localStorage.setItem("seriesid" , String(seriesid))
    window.location = "series-detail.html"
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