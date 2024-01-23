

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


const bannerSlider = document.getElementsByClassName("banne-slider")[0]
const information = document.getElementsByClassName("information")[0]
const btn = document.getElementsByClassName("manual")[0]
const container = document.getElementsByClassName("container")[0]


getMovies("https://api.themoviedb.org/3/movie/now_playing?api_key=ca096e1e99b3e15214497ebe2b2a58f9")

function getMovies(url) {
    fetch(url).then(res => res.json()).then(data =>{
        showMovies(data.results)
    })    
}



function showMovies(data){


    let slidecount = 0

    data.forEach((movie) => {
        
        const{poster_path , id , release_date , overview , vote_average , title , backdrop_path }=movie

        container.style.backgroundImage = `linear-gradient(to rig , black , transparent) , url(${img_url + backdrop_path})`

        const slides = document.createElement("div")
        slides.classList.add("slides")
        slides.setAttribute("slides" , "")
        slides.style.backgroundImage = `linear-gradient(to right , black , transparent) , url(${img_url + backdrop_path})`
        slides.innerHTML

        bannerSlider.appendChild(slides)




        const BannerInfo = document.createElement("div")
        BannerInfo.classList.add("banner-info")
        BannerInfo.setAttribute("banner-info" , "")
        BannerInfo.innerHTML=`
        <div class="headding">${title}</div>
                <div class="year-ratting">
                    <div class="rating ${getcolour(vote_average)}"><i class="fa-solid fa-star" style="color: #fbff00;"></i>&nbsp;${vote_average.toFixed(1)}</div>
                    <div class="year">${release_date.split("-")[0]}</div>
                </div>
        
                <div class="overview">${overview}</div>
                <div class="watch-movie">
                    <button  onclick="getMovieDetails(${id})"><img src="playbutton.png">&nbsp;Watch</button>
                </div>
        `
        information.appendChild(BannerInfo)



        
        const manualBTN = document.createElement("div")
        manualBTN.classList.add("manual-btn")
        manualBTN.setAttribute("manual-btn" , `${slidecount}`)
        manualBTN.innerHTML=`
        <img src="${img_url + poster_path}" width="200px" height="300px">
            
        `
        btn.appendChild(manualBTN)


        slidecount++
       

    });   

    animation()
    letSlide()
}


function letSlide() {
  
  let u = document.querySelectorAll("[slides]")
  let v = document.querySelectorAll("[banner-info]")
  let w = document.querySelectorAll("[manual-btn]")

  let defaultu = u[0]
  let defaultv = v[0]
  let defaultw = w[0]

  defaultu.classList.add("active")
  defaultv.classList.add("active")
  defaultw.classList.add("active")

  w.forEach((button , i)=>{
    button.addEventListener("click" , ()=>{

      u.forEach((slide)=>{
        slide.classList.remove("active")
      })


      v.forEach((Bannerinfo)=>{
        Bannerinfo.classList.remove("active")
      })


      w.forEach((manualButton)=>{
        manualButton.classList.remove("active")
      })



      u[i].classList.add("active")
      v[i].classList.add("active")
      w[i].classList.add("active")

    })

  })

}


function getMovieDetails(movieid){
  window.localStorage.setItem("movieid" , String(movieid))
  window.location = "movie-detail.html"
}

let count = 0
function animation() {
  
  setInterval(() => {

    Array.from(document.getElementsByClassName("manual-btn")).forEach((data,index)=>{
      data.addEventListener("click" ,()=>{
        count=index
      })
    })
    if(count!=20){
      console.log(count)
      
      let movieslide = Array.from(document.getElementsByClassName("slides"))
      movieslide.forEach((data)=>{
        data.classList.remove("active")
      })
      movieslide[count].classList.add("active")


      let movieinfo = Array.from(document.getElementsByClassName("banner-info"))
      movieinfo.forEach((data)=>{
        data.classList.remove("active")
      })
      movieinfo[count].classList.add("active")


      let movieBTN = Array.from(document.getElementsByClassName("manual-btn"))
      movieBTN.forEach((data)=>{
        data.classList.remove("active")
      })
      movieBTN[count].classList.add("active")

      count ++
    }
    else{
      count=0
    }

  }, 4000);


}