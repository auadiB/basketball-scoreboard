let homePoints = document.getElementById("home-points")
let guestPoints = document.getElementById("guest-points")
let resetBtn = document.getElementById("reset-btn")
let winner = document.getElementById("winner")
let hscore = 0
let gscore = 0
winner.innerHTML = "WINNER"

function incrementHomeBy1() {
    hscore  += 1
    homePoints.innerHTML = hscore
}
function incrementHomeBy2() {
    hscore += 2
    homePoints.innerHTML = hscore
}
function incrementHomeBy3() {
    hscore += 3
    homePoints.innerHTML = hscore
}

function incrementGuestBy1() {
    gscore += 1
    guestPoints.innerHTML = gscore
}
function incrementGuestBy2() {
    gscore += 2
    guestPoints.innerHTML = gscore
}
function incrementGuestBy3() {
    gscore += 3
    guestPoints.innerHTML = gscore
     
}

function whoWin() {
    homePoints.innerHTML = hscore
    guestPoints.innerHTML = gscore
    if(hscore > gscore)
    {
        winner.innerHTML = "HOME WIN"
    }else if(hscore === gscore)
    {
        winner.innerHTML = "DRAW"
    }
else{
        winner.innerHTML = "GUEST WIN"
    }
}


function reset() {
    hscore = 0
    gscore = 0 
    homePoints.innerHTML = hscore
    guestPoints.innerHTML = gscore
    winner.innerHTML = "WINNER"
   
}
 