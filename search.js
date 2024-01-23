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



let username = window.localStorage.getItem("username")
updateName.innerHTML=`${username}`

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

let movielist0 = document.getElementsByClassName("movie-list")[0]
getrecentmovies("https://api.themoviedb.org/3/movie/now_playing?api_key=ca096e1e99b3e15214497ebe2b2a58f9")
function getrecentmovies(url) {
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data)
        showrecentmovies(data.results)
    })
}
function showrecentmovies(data) {

    movielist0.innerHTML=""

    data.forEach((movie) => {
        const{poster_path , release_date , overview , vote_average , title, id}=movie

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
        
        movielist0.appendChild(movieItem)

    });    
}


let movielist1 = document.getElementsByClassName("movie-list")[1]
getanimationmovies("https://api.themoviedb.org/3/discover/movie?api_key=ca096e1e99b3e15214497ebe2b2a58f9&sort_by=popularity.desc&include_adult=false&with_genres=16")
function getanimationmovies(url) {
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data)
        showanimationmovies(data.results)
    })
}
function showanimationmovies(data) {

    movielist1.innerHTML=""

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
        
        movielist1.appendChild(movieItem)

    });    
}


let movielist2 = document.getElementsByClassName("movie-list")[2]
getsciencemovies("https://api.themoviedb.org/3/discover/movie?api_key=ca096e1e99b3e15214497ebe2b2a58f9&sort_by=popularity.desc&include_adult=false&with_genres=878")
function getsciencemovies(url) {
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data)
        showsciencemovies(data.results)
    })
}
function showsciencemovies(data) {

    movielist2.innerHTML=""

    data.forEach((movie) => {
        const{poster_path , release_date , overview , id ,vote_average , title}=movie

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
        
        movielist2.appendChild(movieItem)

    });    
}



let movielist3 = document.getElementsByClassName("movie-list")[3]
getromanticmovies("https://api.themoviedb.org/3/discover/movie?api_key=ca096e1e99b3e15214497ebe2b2a58f9&sort_by=popularity.desc&include_adult=false&with_genres=10749")
function getromanticmovies(url) {
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data)
        showromanticmovies(data.results)
    })
}
function showromanticmovies(data) {

    movielist3.innerHTML=""

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
        
        movielist3.appendChild(movieItem)

    });    
}


let movielist4 = document.getElementsByClassName("movie-list")[4]
gethindimovies("https://api.themoviedb.org/3/discover/movie?api_key=ca096e1e99b3e15214497ebe2b2a58f9&sort_by=popularity.desc&page=1&with_original_language=hi")
function gethindimovies(url) {
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data)
        showhindimovies(data.results)
    })
}
function showhindimovies(data) {

    movielist4.innerHTML=""

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
        
        movielist4.appendChild(movieItem)

    });    
}


let movielist5 = document.getElementsByClassName("movie-list")[5]
gettamilmovies("https://api.themoviedb.org/3/discover/movie?api_key=ca096e1e99b3e15214497ebe2b2a58f9&sort_by=popularity.desc&page=1&with_original_language=ta")
function gettamilmovies(url) {
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data)
        showtamilmovies(data.results)
    })
}
function showtamilmovies(data) {

    movielist5.innerHTML=""

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
        
        movielist5.appendChild(movieItem)

    });    
}



let search = document.getElementById("search")
let form = document.getElementById("form")
let heading = document.getElementsByClassName("heading")[0]
let movieWrapper = document.getElementsByClassName("movie-wrapper")[0]


// javascript for getting search movies

function getSearchmovies1(url) {
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data)
        showrSearchmovies1(data.results)
    })
}
function getSearchmovies2(url) {
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data)
        showrSearchmovies2(data.results)
    })
}
function getSearchmovies3(url) {
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data)
        showrSearchmovies3(data.results)
    })
}
function getSearchmovies4(url) {
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data)
        showrSearchmovies4(data.results)
    })
}
function getSearchmovies5(url) {
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data)
        showrSearchmovies4(data.results)
    })
}


function showrSearchmovies1(data) {

    movielist0.innerHTML=""
    movielist1.innerHTML=""
    movielist2.innerHTML=""
    movielist3.innerHTML=""
    movielist4.innerHTML=""
    movielist5.innerHTML=""


    data.forEach((movie) => {
        const{poster_path , release_date , id, overview , vote_average , title}=movie

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
        
        movielist0.appendChild(movieItem)

    });    
}
function showrSearchmovies2(data) {

    movielist1.innerHTML=""
    movielist2.innerHTML=""
    movielist3.innerHTML=""
    movielist4.innerHTML=""
    movielist5.innerHTML=""


    data.forEach((movie) => {
        const{poster_path , release_date , id, overview , vote_average , title}=movie

        const movieItem = document.createElement("div")
        movieItem.classList.add("movie-item")
        movieItem.innerHTML=`
        
        <img class="movie-image" onclick="getMovieDetails(${id})" src="${img_url + poster_path}">
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
        
        movielist1.appendChild(movieItem)

    });    
}
function showrSearchmovies3(data) {

    movielist2.innerHTML=""
    movielist3.innerHTML=""
    movielist4.innerHTML=""
    movielist5.innerHTML=""


    data.forEach((movie) => {
        const{poster_path , release_date , id, overview , vote_average , title}=movie

        const movieItem = document.createElement("div")
        movieItem.classList.add("movie-item")
        movieItem.innerHTML=`
        
        <img class="movie-image" onclick="getMovieDetails(${id})" src="${img_url + poster_path}">
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
        
        movielist2.appendChild(movieItem)

    });    
}
function showrSearchmovies4(data) {

    movielist3.innerHTML=""
    movielist4.innerHTML=""
    movielist5.innerHTML=""


    data.forEach((movie) => {
        const{poster_path , release_date , id, overview , vote_average , title}=movie

        const movieItem = document.createElement("div")
        movieItem.classList.add("movie-item")
        movieItem.innerHTML=`
        
        <img class="movie-image" onclick="getMovieDetails(${id})" src="${img_url + poster_path}">
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
        
        movielist3.appendChild(movieItem)

    });    
}
function showrSearchmovies5(data) {

    movielist3.innerHTML=""
    movielist4.innerHTML=""
    movielist5.innerHTML=""


    data.forEach((movie) => {
        const{poster_path , release_date , id, overview , vote_average , title}=movie

        const movieItem = document.createElement("div")
        movieItem.classList.add("movie-item")
        movieItem.innerHTML=`
        
        <img class="movie-image" onclick="getMovieDetails(${id})" src="${img_url + poster_path}">
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
        
        movielist3.appendChild(movieItem)

    });    
}

movielist1.style.height = "0";
movielist2.style.height = "0";
movielist3.style.height = "0";
movielist4.style.height = "0";
movielist5.style.height = "0";

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
    clickCount ++
})


form.addEventListener('submit' , (e)=>{
    e.preventDefault()
    let searchTerm = search.value
    heading.innerHTML=`Results for " ${searchTerm} "`
    
    if(searchTerm){
        getSearchmovies1("https://api.themoviedb.org/3/search/movie?api_key=ca096e1e99b3e15214497ebe2b2a58f9&query=" + searchTerm + "&sort_by=popularity.desc&include_adult=false&original_language=en-US&page=1")
        getSearchmovies2("https://api.themoviedb.org/3/search/movie?api_key=ca096e1e99b3e15214497ebe2b2a58f9&query=" + searchTerm + "&sort_by=popularity.desc&include_adult=false&original_language=en-US&page=2")
        getSearchmovies3("https://api.themoviedb.org/3/search/movie?api_key=ca096e1e99b3e15214497ebe2b2a58f9&query=" + searchTerm + "&sort_by=popularity.desc&include_adult=false&original_language=en-US&page=3")
        getSearchmovies4("https://api.themoviedb.org/3/search/movie?api_key=ca096e1e99b3e15214497ebe2b2a58f9&query=" + searchTerm + "&sort_by=popularity.desc&include_adult=false&original_language=en-US&page=4")
        getSearchmovies5("https://api.themoviedb.org/3/search/movie?api_key=ca096e1e99b3e15214497ebe2b2a58f9&query=" + searchTerm + "&sort_by=popularity.desc&include_adult=false&original_language=en-US&page=5")
    }

    console.log(searchTerm)
})


function getMovieDetails(movieid){
    window.localStorage.setItem("movieid" , String(movieid))
    window.location = "movie-detail.html"
}

function showMenuBar() {
    let menu = document.getElementsByClassName("sideNavBar")[0]
    menu.classList.toggle("active")
}
function showSearchBar(params) {
  window.location = "search.html"
}


