
let arrow1 = document.getElementsByClassName("left-arrow")[0]
let arrow2 = document.getElementsByClassName("right-arrow")[0]

let x = document.getElementsByClassName("anime1")[0]
let y = document.getElementsByClassName("anime2")[0]
let z = document.getElementsByClassName("anime3")[0]

let clickcount = 0

arrow2.addEventListener("click" , ()=>{
    clickcount ++
    changeSlide(clickcount)
    console.log(clickcount)
})

arrow1.addEventListener("click" , ()=>{
    clickcount --
    changeSlide(clickcount)
    console.log(clickcount)
})


function changeSlide(clickcount) {
    if (clickcount == 1) {
        x.style.width = "0"
        x.style.height = "0"
        y.style.width = "100%"
        y.style.height = "100%"
        z.style.width = "0"
        z.style.height = "0"
    }
    else if (clickcount == 2) {
        x.style.width = "0"
        x.style.height = "0"
        z.style.width = "100%"
        z.style.height = "100%"
        y.style.width = "0"
        y.style.height = "0"
    }
    else if (clickcount == 0) {
        z.style.width = "0"
        z.style.height = "0"
        x.style.width = "100%"
        x.style.height = "100%"
        y.style.width = "0"
        y.style.height = "0"
    }
}

