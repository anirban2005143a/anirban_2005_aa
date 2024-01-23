const movieID = window.localStorage.getItem("movieid")
const seriesID = window.localStorage.getItem("seriesid")
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


// javascript for showing similar movies 
console.log(movieID)
let a = document.getElementsByClassName("movie-list")[0]
getSimilarMovies("https://api.themoviedb.org/3/tv/" + seriesID + "/similar?api_key=ca096e1e99b3e15214497ebe2b2a58f9")
function getSimilarMovies(url) {
  fetch(url).then(res => res.json()).then( data=>{
    console.log(data)
    showSimilarMovies(data.results)
  })
}
function showSimilarMovies(data) {

  a.innerHTML=""

  data.forEach((movie)=>{

    const{poster_path , overview , vote_average , name ,first_air_date ,id }=movie

    if(poster_path!=null){
      
          let movieItem = document.createElement("div")
          movieItem.classList.add("movie-item")
          movieItem.innerHTML=`
          <div class="movie-image"   onclick="getwebseriesDetails(${id})"><img src="${img_url + poster_path}"></div>
          <div class="description" onclick="getwebseriesDetails(${id})">
              <div class="heading">${name}</div>
              <div class="overview">${overview}</div>
              <div class="watch-rate"><button >Watch</button><span class="${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #fbff00;"></i>&nbsp;${vote_average.toFixed(1)}</span></div>
          </div>
          <div class="movie-name-year-rate" onclick="getwebseriesDetails(${id})" >
              <div class="movie-name">${name}</div>
              <div class="rate-year">
                  <div class="rate ${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #fbff00;"></i>&nbsp;${vote_average.toFixed(1)}</div>
                  <div class="release-year">${first_air_date.split("-")[0]}</div>
              </div>
          </div>
          `
      
          a.appendChild(movieItem)

    }
    else{
      let movieItem = document.createElement("div")
          movieItem.classList.add("movie-item")
          movieItem.innerHTML=`
          <div class="movie-image"   onclick="getwebseriesDetails(${id})"><img src="default poster png.png" style="opacity:0.5"></div>
          <div class="description" onclick="getwebseriesDetails(${id})">
              <div class="heading">${name}</div>
              <div class="overview">${overview}</div>
              <div class="watch-rate"><button >Watch</button><span class="${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #fbff00;"></i>&nbsp;${vote_average.toFixed(1)}</span></div>
          </div>
          <div class="movie-name-year-rate" onclick="getwebseriesDetails(${id})" >
              <div class="movie-name">${name}</div>
              <div class="rate-year">
                  <div class="rate ${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #fbff00;"></i>&nbsp;${vote_average.toFixed(1)}</div>
                  <div class="release-year">${first_air_date.split("-")[0]}</div>
              </div>
          </div>
          `
      
          a.appendChild(movieItem)
    }

  })
  
}


// javascript for showing movie details
getmoviedetails("https://api.themoviedb.org/3/tv/" + seriesID + "?api_key=ca096e1e99b3e15214497ebe2b2a58f9&append_to_response=casts%2Cvideos%2Cimages%2Creleases")
function getmoviedetails(url) {
  fetch(url).then(res => res.json()).then(data =>{
    console.log(data)
    console.log(data.overview)
    // console.log(data.casts.cast)
    showMovieDetails(data)
    gethomepage(data.homepage)
  })
}



function getgenrelist(list) {

  let newGenreArray = []
  list.forEach((data)=>{
    const{name} = data
    newGenreArray.push(name)
  })
  return newGenreArray.join(" , ")
}



// javascript for showing movie details
function showMovieDetails(data) {
  
  document.title = data.name + " - MovieFlix"
  
  let container = document.getElementsByClassName("container")[0]
  container.style.backgroundImage = `linear-gradient(to bottom , black , transparent, black) , url(${img_url + data.backdrop_path})`
  container.innerHTML=""

  container.innerHTML=`
            <div class="movie-img">
                <img src="${img_url + data.poster_path}">
            </div>
            <div class="movie-description">
                <div class="description-movie-img">
                  <img src="${img_url + data.poster_path}">
                </div>
                <div class="shadow">
                  <div class="series-name">${data.name}</div>
                  <div class="rate-time-year ${getcolour(data.vote_average)}"><i class="fa-solid fa-star" style="color: #fbff00;">&nbsp;</i>${data.vote_average.toFixed(1)} &nbsp; &nbsp; </div>
                  <div class="category">${getgenrelist(data.genres)}</div>
                  <div class="overview">${data.overview}</div>
                  <div class="ep-and-seasons">
                      <div class="ep-heading">Episode Run-Time: </div>
                      <div class="text">${data.episode_run_time} mins</div>
                  </div>
                  <div class="noOfSeasons">
                      <div class="ep-heading">No Of Seasons: </div>
                      <div class="text">${data.number_of_seasons}</div>
                  </div>
                  <div class="noOfSeasons">
                      <div class="ep-heading">First Air Date: </div>
                      <div class="text">${data.first_air_date}</div>
                  </div>
                </div>
                <div class="watchmovie">
                    <button ><img src="playbutton.png">Watch Now</button>
                </div>
            </div>  
                
  `
  

  let image = document.getElementById("image")
  let seriesname = document.getElementById("series-name")
  let overview = document.getElementById("overview")
  let rating = document.getElementById("rating")
  let yearOfRelease = document.getElementById("yearOfRelease")
  let idOfseries = document.getElementById("idOfseries")

  image.setAttribute("value" , `${img_url + data.poster_path}`)
  seriesname.setAttribute("value" , document.getElementsByClassName("series-name")[0].innerHTML)
  overview.setAttribute("value" , document.getElementsByClassName("overview")[0].innerHTML)
  rating.setAttribute("value" , `${data.vote_average.toFixed(1)}`)
  yearOfRelease.setAttribute("value" , `${data.first_air_date.split("-")[0]}`)
  idOfseries.setAttribute("value" , `${data.id}`)

  
}  


// javascript for getting home page of the movie
function gethomepage(url) {
  let Btn = document.querySelectorAll("button")[0]

  Btn.addEventListener("click" , (e)=>{
    e.preventDefault
    console.log(url)
    window.location.href = url
  })
}

function getwebseriesDetails(seriesid){
  window.localStorage.setItem("seriesid" , String(seriesid))
  window.location = "series-detail.html"
}


function getindexpage() {
  window.location = "index.html"
}let account = document.getElementsByClassName("account")[0]
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
console.log(username)

function getindexpage() {
  window.location = "index.html"
}

let input = document.getElementsByClassName("customInput")
let newArray = Array.from(input)
newArray.forEach((data , index1)=>{

  data.addEventListener("click" , ()=>{
    
      let rateID = index1;
      window.localStorage.setItem("userRating" , String(rateID+1))
      

      newArray.forEach((data , index2)=>{

        index1 >= index2 ? data.classList.add("clicked") : data.classList.remove("clicked")
    
      }) 
    
  })


  data.addEventListener("mouseover" , ()=>{

    newArray.forEach((data , index2)=>{
      index1 >= index2 ? data.classList.add("active") : data.classList.remove("active")
    })
  })


  data.addEventListener("mouseout" , ()=>{

    newArray.forEach((data , index2)=>{
      data.classList.remove("active")
    })
  })


})
