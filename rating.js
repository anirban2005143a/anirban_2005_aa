
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