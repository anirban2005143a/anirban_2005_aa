const movieID = window.localStorage.getItem("movieid")
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
getSimilarMovies("https://api.themoviedb.org/3/movie/" + movieID + "/similar?api_key=ca096e1e99b3e15214497ebe2b2a58f9")
function getSimilarMovies(url) {
  fetch(url).then(res => res.json()).then( data=>{
    showSimilarMovies(data.results)
  })
}

function showSimilarMovies(data) {

  a.innerHTML=""

  data.forEach((movie)=>{

    const{poster_path , overview , vote_average , title ,release_date ,id }=movie

    if(poster_path!= null){

      let movieItem = document.createElement("div")
      movieItem.classList.add("movie-item")
      movieItem.innerHTML=`
      <div class="movie-image"  onclick= "movieData(${id})"><img src="${img_url + poster_path}"></div>
      <div class="description"  onclick="movieData(${id})">
          <div class="heading">${title}</div>
          <div class="overview">${overview}</div>
          <div class="watch-rate"><button >Watch</button><span class="${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #fbff00;"></i>&nbsp;${vote_average.toFixed(1)}</span></div>
      </div>
      <div class="movie-name-year-rate"  onclick="movieData(${id})">
          <div class="movie-name">${title}</div>
          <div class="rate-year">
              <div class="rate ${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #fbff00;"></i>&nbsp;${vote_average.toFixed(1)}</div>
              <div class="release-year">${release_date.split("-")[0]}</div>
          </div>
      </div>
  
  
      `
  
      a.appendChild(movieItem)

    }
    else{
      let movieItem = document.createElement("div")
      movieItem.classList.add("movie-item")
      movieItem.innerHTML=`
      <div class="movie-image"  onclick= "movieData(${id})"><img src="default poster png.png" style="opacity:0.5"></div>
      <div class="description"  onclick="movieData(${id})">
          <div class="heading">${title}</div>
          <div class="overview">${overview}</div>
          <div class="watch-rate"><button >Watch</button><span class="${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #fbff00;"></i>&nbsp;${vote_average.toFixed(1)}</span></div>
      </div>
      <div class="movie-name-year-rate"  onclick="movieData(${id})">
          <div class="movie-name">${title}</div>
          <div class="rate-year">
              <div class="rate ${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #fbff00;"></i>&nbsp;${vote_average.toFixed(1)}</div>
              <div class="release-year">${release_date.split("-")[0]}</div>
          </div>
      </div>
  
  
      `
  
      a.appendChild(movieItem)
    }

  })
  
}

function movieData(movieid){
  window.localStorage.setItem("movieid" , String(movieid))
  window.location = "movie-detail.html"
}

// javascript for showing movie details
getmoviedetails("https://api.themoviedb.org/3/movie/" + movieID + "?api_key=ca096e1e99b3e15214497ebe2b2a58f9&append_to_response=casts%2Cvideos%2Cimages%2Creleases")
function getmoviedetails(url) {
  fetch(url).then(res => res.json()).then(data =>{
    showMovieDetails(data)
    showvideos(data.videos.results)
    gethomepage(data.homepage)
    showCastList(data.casts.cast)
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

function getCastList(list) {
  let newCastArray = []
  
  list.forEach((data)=>{
    const {name} = data
    newCastArray.push(name)
  })
  return newCastArray.join(", ")
}



function getDirector(list) {
  let directors = list.filter(filterCrew)
  return directors[0].name
}
function filterCrew(data) {
  const{job} = data
  return job === "Director"  
}


// javascript for showing movie details
function showMovieDetails(data) {
  
  document.title = data.title + " - MovieFlix"
  
  let container = document.getElementsByClassName("container")[0]
  // container.style.backgroundImage = `linear-gradient(to bottom , black , transparent, transparent, black) , url(${img_url + data.backdrop_path})`
  // container.innerHTML=""

  container.innerHTML=`
            <div class="pagebackground">
            </div>
              <div class="movie-img">
                <img src="${img_url + data.poster_path}">
            </div>
            <div class="movie-description" >
                <div class="description-movie-img">
                  <img src="${img_url + data.poster_path}">
                </div>
                <div class="shadow">        
                <div class="movie-name">${data.title}</div>
                    <div class="rate-time-year"><i style="overflow: hidden;color: #fbff00;" class="fa-solid fa-star">&nbsp;</i>${data.vote_average.toFixed(1)} &nbsp;. &nbsp; ${data.runtime}min &nbsp; . &nbsp; ${data.release_date.split("-")[0]}</div>
                    <div class="category">${getgenrelist(data.genres)}</div>
                    <div class="overview">${data.overview}</div>
                    <div class="starring">
                        <div class="heading">Starring: </div>
                        <div class="content">${getCastList(data.casts.cast)}</div>
                    </div>
                    <div class="drector">
                        <div class="director-heading">Directed By:</div>
                        <div class="director-name">${getDirector(data.casts.crew)}</div>
                    </div>
                </div>
                
                <div class="watchmovie">
                    <button ><img src="playbutton.png">Watch Now</button>
                </div>
                
            </div>
           
  `

    let image = document.getElementById("image")
    let moviename = document.getElementById("movie-name")
    let overview = document.getElementById("overview")
    let rating = document.getElementById("rating")
    let yearOfRelease = document.getElementById("yearOfRelease")
    let idOfMovie = document.getElementById("idOfMovie")
  
    image.setAttribute("value" , `${img_url + data.poster_path}`)
    moviename.setAttribute("value" , document.getElementsByClassName("movie-name")[0].innerHTML)
    overview.setAttribute("value" , document.getElementsByClassName("overview")[0].innerHTML)
    rating.setAttribute("value" , `${data.vote_average.toFixed(1)}`)
    yearOfRelease.setAttribute("value" , `${data.release_date.split("-")[0]}`)
    idOfMovie.setAttribute("value" , `${data.id}`)


    if(data.images.backdrops.length>=6 ){
      animatebackground()
    }
    
    data.images.backdrops.forEach((banner)=>{
      let backdroppath = document.createElement("div")
      backdroppath.classList.add("backdrop-path")
      backdroppath.style.height = 0
      backdroppath.style.backgroundImage = `linear-gradient(to bottom , black , transparent, transparent, transparent, black) , url(${img_url + banner.file_path})`
      document.getElementsByClassName("pagebackground")[0].appendChild(backdroppath)
      console.log("done")

    })

    console.log(data.images.backdrops[0])
    document.getElementsByClassName("backdrop-path")[1].style.height = "100%"
    document.getElementsByClassName("backdrop-path")[1].style.backgroundImage = `linear-gradient(to bottom , black , transparent, transparent, transparent, black) , url(${img_url + data.images.backdrops[0].file_path})`

    function animatebackground() {
      
      let changebackground = 2
      setInterval(()=>{
        if(changebackground<=6){
          Array.from(document.getElementsByClassName("backdrop-path")).forEach((item)=>{
            item.style.height = 0
          })
          document.getElementsByClassName("backdrop-path")[changebackground].style.height = "100%"
          changebackground++
        }
        else{
          changebackground=2
        }
      },2500)

    }

    
  
}  

function showvideos(data) {

  let videos = document.getElementsByClassName("videos")[0]
  let notsaved = document.getElementsByClassName("notsaved")[0] 

  if(data.length == 0){
    notsaved.innerHTML=`<img src="upset.png">Uppss.... No related videos found !!!`
    notsaved.style.display = "visible"
  }
  else{
    notsaved.innerHTML = ""
    notsaved.style.display = "none"
    videos.innerHTML=""
    for(let i =0;i<=8;i++){
       
        let videoitem = document.createElement("div")
        videoitem.classList.add("videoitem")
        videoitem.innerHTML=`
          <iframe width="200" height="100" src="https://www.youtube.com/embed/${data[i].key}?" title="YouTube video player" frameborder="0"></iframe>
        `
        videos.appendChild(videoitem)
      
    }
    

  }
}


function showCastList(data) {

  for(let i=0; i <=14 ; i++){
    if(data[i].profile_path!=null){
      document.getElementsByClassName("notsavedforCast")[0].style.display = "none"
      document.getElementsByClassName("notsavedforCast")[0].style.padding = 0
      let castitem = document.createElement("div")
      castitem.classList.add("castitem")
      castitem.innerHTML = `
        <img src="${img_url + data[i].profile_path}">
        <div class="castname">${data[i].name}</div>
      `
  
      document.getElementsByClassName("castimages")[0].appendChild(castitem)

      console.log("passed")
    }
    else{
      document.getElementsByClassName("notsavedforCast")[0].style.display = "none"
      document.getElementsByClassName("notsavedforCast")[0].style.padding = 0
      console.log("decline")
      let castitem = document.createElement("div")
      castitem.classList.add("castitem")
      castitem.innerHTML = `
        <img src="user.jpg">
        <div class="castname">${data[i].name}</div>
      `
  
      document.getElementsByClassName("castimages")[0].appendChild(castitem)

      console.log("passed")
    }
  }
}
// javascript for getting home page of the movie
function gethomepage(url) {
  let Btn = document.querySelectorAll("button")[0]

  Btn.addEventListener("click" , (e)=>{
    e.preventDefault()
    window.location = url
  })
}


// javascrpit for searching movie

let search = document.getElementById("search")
let form = document.getElementById("form")
const change = document.querySelector("body")

 
function getMovieDetails(movieid){
    window.localStorage.setItem("movieid" , String(movieid))
    window.location = "movie-detail.html"
}


let account = document.getElementsByClassName("account")[0]
let AccountSettings = document.getElementsByClassName("account-settings")[0]

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


  